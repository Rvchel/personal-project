
module.exports = {

    //Adding cat (WORKS)
    addPet: (req, res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const {catname, img} = req.body

        db.createCat([catname, img])
        .then(response => res.status(200).json(response))
        .catch(() => console.log('cant add cat'))
    },

    //Getting all cats (WORKS)
    getPet: (req, res) => {
        const db = req.app.get('db')

        db.getCats()
        .then(response => res.status(200).json(response))
        .catch(() => {console.log('error getting cats')})
        res.status(500)
    },

    //Deletes one cat (WORKS)
    deletePet: (req, res) => {
        console.log(req.params,'hit that')
        const db = req.app.get('db')
        const {pet} = req.params
        // const index = pets.findIndex(pet => pet.petName === req.params.pet)
        // console.log(index)
        db.deleteCat(pet) 
        .then(response => res.status(200).json(response))
        .catch(() => console.log('cant delete cat'))
    },

    editPet: (req, res) => {
        console.log(req.body)
        console.log(req.params)
        const db = req.app.get('db')
            const {catname, img} = req.body
            const {id} = req.params

            db.updateCat([+id, catname, img])
            .then(response => res.status(200).json(response))
            .catch(() => console.log('cant update cat'))
            
        }
}