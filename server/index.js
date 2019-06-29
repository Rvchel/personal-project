require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {getProducts, getProductCategory} = require('./controllers/productsController');
const {registerUser, loginUser, getUser, logoutUser} = require('./controllers/authController');
const {addToCart, removeFromCart} = require('./controllers/cartController');
const {editCat, deleteCat, addCat, getCat} = require('./controllers/catController');
const mailController = require('./controllers/mailController');
const {getAllOrders} = require('./controllers/ordersController');
const nodemailer = require('nodemailer');

const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json());

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
app.post('/send', (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'catz@gmail.com',
            pass: 'Potatoes'
        }
    })
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

        var mail = {
        from: name,
            to: `${email}`,  //Change to email address that you want to receive messages on
            subject: 'New Message from Contact Form',
            text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
                res.json({
                msg: 'fail'
            })
                } else {
                    res.json({
                    msg: 'success'
                })
            }
        })
    })

//Stripe
const stripe = require('stripe')('sk_test_OtKDrvTUWiTxwblRzA6ashZR00NoebjoJc')
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