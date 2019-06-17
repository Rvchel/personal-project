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
    }







}