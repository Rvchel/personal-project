
module.exports = {

    // Adding to the users cart with price.
    addToCart: (req, res) => {
        // console.log(req.body)
        // console.log(req.params)
        
        const {product} = req.params
        const {price} = req.body
        const db = req.app.get('db')

        db.getProduct(product).then(response => {
                let productObject = response;
                console.log(productObject)
        req.session.user.cart.push(productObject)
        req.session.user.total += +price;
        res.status(200).json(req.session.user)

        })
    },

    removeFromCart: (req, res) => {
        let index = req.params.id
        req.session.user.total -= +req.session.user.cart[index][0].price
        req.session.user.cart.splice(index, 1)
        res.status(200).json(req.session.user)
    }
}