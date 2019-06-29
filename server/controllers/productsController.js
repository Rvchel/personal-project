
module.exports = {

    //Grabs all products from db so I can be able to display them on my dashboard.
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.getProducts()
        .then(response => res.status(200).json(response))
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
    },

    getProductCategory: (req, res) => {
        const db = req.app.get('db')

        db.getProductCategory()
        .filter()
    }
}