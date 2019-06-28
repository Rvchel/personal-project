
module.exports = {

    //Cart is being pulled from the user object in authController.
    //addToCart & removeFromCart are also in redux.

    //Adding to the users cart with price.
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

    //Removes product and price from the user cart.
    // removeFromCart: (req, res) => {
    //     console.log('req.body: ', req.body)
    //     console.log('req.params: ', req.params)

    //     const {id} = req.params.id
    //     const {price} = req.body
    //     const db = req.app.get('db')
    //     console.log('id: ', id)
    //     console.log('price: ', +price)

    //     db.deleteProduct(id).then(response => {
    //         let productObject = response;
    //         console.log(productObject)
    //         req.session.user.cart.splice(productObject ,1)
    //         req.session.user.total -= +price
    //         res.status(200).json(req.session.user)
    //     })

    // }

    removeFromCart: (req, res) => {
        let index = +req.params.id

        req.session.user.total -= req.session.user.cart[index].price
        req.session.user.cart.splice(index, 1)

        res.status(200).json(req.session.user)
    }
}