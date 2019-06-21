const pets = [
    {
        id: 0,
        petName: 'Ophelia',
        petImg: 'https://scontent-sjc3-1.cdninstagram.com/vp/447754c1c5a2e0138e472b08c6de9b11/5D85391F/t51.2885-15/e35/57317302_170585370601571_757951390266768352_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&se=7&ig_cache_key=MjAzMDEzMzUxMjU1ODE3ODMwMw%3D%3D.2'
    },

    {
        id: 1,
        petName: 'Grey',
        petImg: 'https://scontent-sjc3-1.cdninstagram.com/vp/6dc04084ec1f93e98fae18e5f639f9a3/5DC21A61/t51.2885-15/e15/s640x640/53934234_1579353238864095_5686923178658655204_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&ig_cache_key=MjAxNTc0NTk2OTYxOTI2ODg1OA%3D%3D.2'
    },

    {
        id: 2,
        petName: 'Lilly Mamma',
        petImg: 'https://scontent-sjc3-1.cdninstagram.com/vp/e056b5c5db81fedbbb084e71db9d5f8f/5DC34FBD/t51.2885-15/fr/e15/s1080x1080/53355977_294102991283141_552910091255451140_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&ig_cache_key=MjAwNDU3MzI0NTc3MjM0NDQyMA%3D%3D.2'
    }
]
module.exports = {

    addPet: (req, res) => {
        console.log(req.body)
        let newPet = req.body
        pets.push(newPet)
        res.json(pets)
    },

    getPet: (req, res) => {
        res.json(pets)
    },

    deletePet: (req, res) => {
        console.log('hit that')
        // const index = pets.findIndex(pet => pet.petName === req.params.pet)
        // console.log(index)
        pets.splice(req.params.pet, 1)
        res.json(pets) 
    },

    editPet: (req, res) => {
            const {petName, petImg, id} = req.body
            const index = pets.findIndex(element => {
                return element.id === id
            })
            pets.splice(index, 1, req.body)
            res.status(200).json(pets)
        }
}











// module.exports = {
//     getAllCats: (req, res) => {
//         const db = req.app.get('db')

//         db.getCats()
//         .then(response => res.status(200).json(response))
//         .catch(error => console.log(error))
//     },

//     createNewCat: (req, res) => {
//         const db = req.app.get('db')
//         const {catName, img} = req.body

//         db.createCat(catName, img)
//         .then(response => res.status(200).json(response))
//         .catch(error => console.log(error))
//     },

//     deleteOneCat: (req, res) => {
//         const db = req.app.get('db')
//         const {id} = req.params

//         db.deleteCat(id)
//         .then(() => res.status(200))
//         .catch(error => console.log(error))
//     },

//     updateOneCat: (req, res) => {
//         const db = req.app.get('db')
//         const {catName, img} = req.body

//         db.updateCat(catName, img)
//         .then(response => res.status(200).json(response))
//         .catch(error => console.log(error))
//     },

//     getOneCat: (req, res) => {
//         const db = req.app.get('db')
//         const {id} = req.params

//         db.getCat(id)
//         .then(response => res.status(200).json(response))
//         .catch(error => console.log(error))
//     }
// }