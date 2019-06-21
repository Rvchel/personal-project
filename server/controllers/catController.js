//NOT SURE IF WORKS

// module.exports = {
//     getPet: (req, res) => {
//         const db = req.app.get('db')

//         db.getCats()
//         res.json(pets)
//     },

//     addPet: (req, res) => {
//         console.log(req.body)
//         const db = req.app.get('db')
//         const {petName, petImg} = req.body
//         let newPet = req.body

//         db.createCat(petName, petImg)
//         pets.push(newPet)
//         res.json(pets)
//     },

//     deletePet: (req, res) => {
//         // console.log('hit that')
//         // const index = pets.findIndex(pet => pet.petName === req.params.pet)
//         // console.log(index)
//         const db = req.app.get('db')
//         const {id} = req.params

//         db.deleteCat(id)
//         pets.splice(req.params.pet, 1)
//         res.json(pets) 
//     },

//     editPet: (req, res) => {
//         const {petName, petImg, id} = req.body
//         const db = req.app.get('db')
//         const index = pets.findIndex(element => {
//             return element.id === id
//         })
//         db.updateCat(petName, petImg)
//         pets.splice(index, 1, req.body)
//         res.status(200).json(pets)
//     }
// }