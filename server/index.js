require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {getProducts} = require('./controllers/productsController');
const {registerUser, loginUser, getUser, logoutUser} = require('./controllers/authController');

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

//auth endpoints
app.post('/auth/register', registerUser);
app.post('/auth/login', loginUser);
app.post('/auth/user', logoutUser);
app.get('/auth/user', getUser);





massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
})