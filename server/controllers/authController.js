const bcrypt = require('bcryptjs');

module.exports = {

    registerUser: (req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        const db = req.app.get('db')

        //does user already exist?
        db.findUser(username)
        .then(usersList => {
            if(usersList.length > 0) {
                res.status(403).json({error: 'USERNAME_TAKEN'})
            } else {
                bcrypt.hash(password, 12).then(newPassword => {
                    //create new user
                    db.addUser(username, newPassword).then(() => {
                        res.status(200).json(username)
                    })
                })
            }
        })
    },


    loginUser: (req,res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        db.findUser(username)
        .then(user => {
            if(!user.length) {
                res.status(404).json({error: 'USER_DOES_NOT_EXIST'})
            } else {
                bcrypt.compare(password, user[0].password).then(doesMatch => {
                    if(!doesMatch) {
                        res.status(403).json({error: 'USERNAME_OR_PASSWORD_INCORRECT'})
                    } else {
                        req.session.user = {
                            username: user[0].username,
                            cart: [],
                            total: 0
                        }
                        res.status(200).json(req.session.user)
                    }
                })
            }
        })
    },






}