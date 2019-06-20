import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            pets: [],
            name: '',
            newName: '',
            img: '',
            edit: '',
            toEdit: '',
            editor: false
        }
        this.updatePet = this.updatePet.bind(this);
        this.addPet = this.addPet.bind(this);
        this.editPet = this.editPet.bind(this);
        this.deletePet = this.deletePet.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        axios.get('/api/pets').then(response => {
            this.setState({pets: response.data})
        })
    }

    updatePet(update) {
        this.setState({pets: update})
    }

    addPet(e, name, img) {
        e.preventDefault()
        axios.post('api/pets/', {
            name: '',
            img: ''
        }).then(response => this.updatePet(response.data)).catch(error => console.log(error))
    }

    //HAVE TO FIX
    editPet(e, name, img, toEdit) {
        e.preventDefault()
        axios.put(`/api/pets/${toEdit}`, {name: name, img: img})
        .then(response => this.updatePet(response.data))

    }

    deletePet(pet) {
        console.log('deletePetinForm', pet)
        axios.delete(`/api/pets/:${pet}`).then(response => {
            this.updatePet(response.data)
        })
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    //HAVE TO FIX
    openEditor(pets) {
        this.setState({editor: !this.state.editor, toEdit: pets}, () => {
            console.log(this.state.toEdit)
        })
    }


    render() {
        // console.log(this.state.name)
        return (
            <div> 

                {this.state.pets.map((pet, index) => (
                    this.state.pets.length ?
                        <div><img src={pet.petImg} />
                        <h2>{pet.petName}</h2>
                        <button onClick={() => this.deletePet(pet.name)}>Delete</button>
                        <button onClick={() => this.openEditor(pet.name)}>Edit!</button>
                        </div>
                        :
                        null
                ))}

                <div>
                    Pet name:
                    <input name='name' value={this.state.name} onChange={e => this.handleChange(e)} />

                    Pet Image: 
                    <input name='img' value={this.state.img} onChange={(e) => this.handleChange(e)} />

                    <button onClick={e => this.addPet(e, this.state.name, this.state.img)}>Add Pet!</button>
                </div>

                {/* HAVE TO FIX */}
                <form>
                    <h3>Edit {this.state.toEdit}</h3>
                    <input name='name' value={this.state.newName} onChange={e => {this.handleChange(e)}} />
                <button onClick={e => this.editPet(e, this.state.name, this.state.img, this.state.toEdit)}>Submit!</button>
                </form>

            </div>
        )
    }
}

export default Form;