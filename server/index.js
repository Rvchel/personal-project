require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {getProducts} = require('./controllers/productsController');
const {registerUser, loginUser, getUser, logoutUser} = require('./controllers/authController');
const {addToCart, removeFromCart} = require('./controllers/cartController');
const {editPet, deletePet, addPet, getPet} = require('./controllers/galleryController');

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

//cart
app.post('/api/cart/:product', addToCart);
app.delete('/api/cart/:id', removeFromCart);


//auth endpoints
app.post('/auth/register', registerUser);
app.post('/auth/login', loginUser);
app.post('/auth/user', logoutUser);
app.get('/auth/user', getUser);

//cat endpoints
// app.post('/api/cats', updateOneCat);
// app.get('/api/cats', getAllCats);
// app.put('/api/cats', createNewCat);
// app.delete('/api/cats/:id', deleteOneCat);
// app.get('/api/cats/:id', getOneCat);
app.post('/api/pets', addPet);
app.get('/api/pets', getPet);
app.delete('/api/pets/:pet', deletePet);
app.put('/api/pet/', editPet);







massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
})