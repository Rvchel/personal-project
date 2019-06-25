
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
        const db = req.app.get('db')
            const {petName, petImg} = req.body
            const {pet} = req.params

            db.updateCat([catName, img])
            // const index = pets.findIndex(element => {
            //     return element.id === id
            // })
            splice(pet, 1, req.body)
            .then(response => res.status(200).json(response))
            .catch(() => console.log('cant update cat'))
            
        }
}