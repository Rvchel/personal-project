
module.exports = {

    getAllOrders: (req, res) => {
        const db = req.app.get('db')

        db.getOrders()
        .then(response => res.status(200).json(response))
        .catch(error => console.log(error))
    }
}