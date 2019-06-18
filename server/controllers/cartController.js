

module.exports = {

    addCart: (req, res) => {
        console.log("this is addCart Controller")
        console.log("this is id", req.params);

        let {user} = req.session;
        console.log(req.session);
        const db = req.app.get('db')
        let id = req.params.id;

        db.getProducts().then(response => {
            let products = response;   

            const index = user.cart.findIndex(products => products.id == id)

            if(index === -1) {
                const selectedProduct = products.find(products => products.id == id)

                user.cart.push(selectedProduct)
                user.total += selectedProduct.price
            }
            res.status(200).json(user.cart);
        });
        
        
    },






}