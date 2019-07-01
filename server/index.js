require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {getProducts, getProductCategory} = require('./controllers/productsController');
const {registerUser, loginUser, getUser, logoutUser} = require('./controllers/authController');
const {addToCart, removeFromCart} = require('./controllers/cartController');
const {editCat, deleteCat, addCat, getCat} = require('./controllers/catController');
// const {email} = require('./controllers/mailController');
const nodemailer = require('nodemailer');
const {getAllOrders} = require('./controllers/ordersController');

const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, EMAIL_USER, EMAIL_PASSWORD, STRIPE_CONNECTION} = process.env

app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))




//product endpoints
app.get('/api/products', getProducts);
app.get('api/products/filter', getProductCategory);

//cart
app.post('/api/cart/:product', addToCart);
app.delete('/api/cart/:id', removeFromCart);


//auth endpoints
app.post('/auth/register', registerUser);
app.post('/auth/login', loginUser);
app.post('/auth/user', logoutUser);
app.get('/auth/user', getUser);

//cat endpoints
app.post('/api/pets', addCat);
app.get('/api/pets', getCat);
app.delete('/api/pets/:pet', deleteCat);
app.put('/api/pet/:id', editCat);

//orders
app.get('/api/orders', getAllOrders);

//nodemailer
var transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD
        }
        });
        app.post("/nodemailer/send", (req, res, next) => {
            console.log(req.body)
        var { name } = req.body;
        var { email } = req.body;
        var { message } = req.body;
        var content = `name: ${name} \n email: ${email} \n message: ${message} `;
        var mail = {
            from: name,
            to: EMAIL_USER,
            subject: "New Custom Order Message",
            text: content
        };
        transport.sendMail(mail);
    });

//Stripe
const stripe = require('stripe')(STRIPE_CONNECTION)
const uuid = require('uuidv4')

app.post("/api/checkout", async (req, res) => {
    let error;
    let status;

    try {
        const { total, cart, token } = req.body
        const customer = await stripe.customers.create({
        
            email: token.email,
            source: token.id
        })
    
        const idempotency_key = uuid();
        const charge = await stripe.charges.create({
            amount: (Math.round(total * 100)),
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased the ${cart[0]} and ${cart[1]}`,
            shipping: {
            name: token.card.name,
            address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                postal_code: token.card.address_zip
            }
        }
    },
        {
            idempotency_key
        })
        console.log("Charge:", { charge })

        status = "success";
    } 
    catch (error) {
        console.error("Error:", error);
        
            status = "failure";
    }
    
    res.json({ error, status });
    console.log(status)
    })


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
})