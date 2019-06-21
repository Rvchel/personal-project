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
                editorOpen: false,
                editorIndex: '',
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
            this.setState({pets: update, editorOpen: false, editorIndex: ''})
        }

        addPet(e, name, img) {
            e.preventDefault()
            axios.post('api/pets/', {
                name: '',
                img: ''
            }).then(response => this.updatePet(response.data)).catch(error => console.log(error))
        }

        ///HAVE TO FIX/
        editPet(e, index) {
            e.preventDefault()
            const {pets} = this.state
            axios.put(`/api/pet/`, {petName: pets[index].petName, petImg: pets[index].petImg, id: pets[index].id})
            .then(response => this.updatePet(response.data))

        }

        deletePet(pet) {
            console.log('deletePetinForm', pet)
            axios.delete(`/api/pets/:${pet}`).then(response => {
                this.updatePet(response.data)
            })
        }

        handleChange(e, index) {
            let tempPets = this.state.pets
            let tempPet = this.state.pets[index]
            tempPet[e.target.name] = e.target.value
            tempPets[index] = tempPet
            this.setState({pets: tempPets})
        }

        ///HAVE TO FIX/
        openEditor(index) {
            this.setState({editorOpen: !this.state.editorOpen, editorIndex: index}, () => {
                console.log(this.state.toEdit)
            })
        }


        render() {
            /// console.log(this.state.name)/
            return (
                <div> 

                    {this.state.pets.map((pet, index) => (
                        this.state.pets.length ?
                            <div><img src={pet.petImg} />
                            <h2>{pet.petName}</h2>
                            <button onClick={() => this.deletePet(index)}>Delete</button>
                            <button onClick={() => this.openEditor(index)}>Edit!</button>
                            {this.state.editorOpen && this.state.editorIndex === index
                                ?
                                <form>
                                    <h3>Edit {this.state.toEdit}</h3>
                                    <input name='petName' value={pet.petName} onChange={e => {this.handleChange(e, index)}} />
                                    <input name='petImg' value={pet.petImg} onChange={e => {this.handleChange(e, index)}} />
                                    <button onClick={e => this.editPet(e, index)}>Submit!</button>
                                </form>
                                :
                                null
                            }
                            
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
                    {/* <form>
                        <h3>Edit {this.state.toEdit}</h3>
                        <input name='name' value={this.state.newName} onChange={e => {this.handleChange(e)}} />
                    <button onClick={e => this.editPet(e, this.state.name, this.state.img, this.state.toEdit)}>Submit!</button>
                    </form> */}

                </div>
            )
        }
    }

    export default Form;
