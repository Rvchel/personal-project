const bcrypt = require('bcryptjs');

module.exports = {

    registerUser: (req, res) => {
        console.log(req.body)
        const {username, password, admin} = req.body
        const db = req.app.get('db')

        //does user already exist?
        //usersList can be called anything ex: cucumber.
        db.findUser(username)
        .then(usersList => {
            if(usersList.length > 0) {
                res.status(403).json({error: 'USERNAME_TAKEN'})
            } else {
                bcrypt.hash(password, 12).then(newPassword => {
                    //create new user
                    db.addUser(username, newPassword, admin).then(() => {
                        res.status(200).json(username)
                    })
                })
            }
        })
    },


    //Logs in user and checks to see if user has already been registered.
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
                            admin: user[0].admin,
                            cart: [],
                            total: 0
                        }
                        console.log("this is session after user",req.session)
                        res.status(200).json(req.session.user)
                    }
                })
            }
        })
    },

    //Grabs individual user that is registered.
    getUser: (req, res) => {
        if(req.session.user) {
            res.json(req.session.user)
        } else {
            res.status(401).json({error: 'Please log in.'})
        }
    },

    logoutUser: (req, res) => {
        req.session.destroy()
        res.status(200).send(req.session)
    }
}