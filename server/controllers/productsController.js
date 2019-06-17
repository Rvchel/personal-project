

module.exports = {

    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.getProducts()
        .then(response => res.status(200).json(response))
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
    }

    // getProducts: ( req, res, next ) => {
    //     const dbInstance = req.app.get('db');
    
    //     dbInstance.getProducts()
    //         .then( products => res.status(200).send( products ) )
    //         .catch( err => {
    //         res.status(500).send({errorMessage: "ERROR"});
    //         console.log(err)
    //         } );
    //     }
}