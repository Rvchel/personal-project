    import React, {Component} from 'react';
    import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
        CardSubtitle, CardBody } from 'reactstrap';
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
            axios.post('api/pets', {
                name: '',
                img: ''
            }).then(response => this.updatePet(response.data)).catch(error => console.log(error))
        } 

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

        createHandleChange(e) {
            this.setState({[e.target.name]: e.target.value})
        }

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
                        <Card style={{width: 400,
                                    height: 400,
                                    marginBottom: 30,
                                    display: 'flex',
                                    justifyContent: 'row'}}>
                            <div><img src={pet.petImg} style={{width: 200,
                                                                height: 200,
                                                                marginBottom: 30}} />
                            <h2>{pet.petName}</h2>
                            <Button onClick={() => this.deletePet(index)}>Delete</Button>
                            <Button onClick={() => this.openEditor(index)}>Edit</Button>
                            {this.state.editorOpen && this.state.editorIndex === index
                                ?
                                <form>
                                    <h3>Edit {this.state.toEdit}</h3>
                                    <input name='petName' value={pet.petName} onChange={e => {this.handleChange(e, index)}} />
                                    <input name='petImg' value={pet.petImg} onChange={e => {this.handleChange(e, index)}} />
                                    <Button onClick={e => this.editPet(e, index)}>Submit</Button>
                                </form>
                                :
                                null
                            }
                            
                            </div> </Card>
                            :
                            null
                    ))}

                    <div>
                        Pet name:
                        <input name='name' value={this.state.name} onChange={e => this.createHandleChange(e)} />

                        Pet Image: 
                        <input name='img' value={this.state.img} onChange={e => this.createHandleChange(e)} />

                        <button onClick={e => this.addPet(e, this.state.name, this.state.img)}>Add Pet!</button>
                    </div>



                    {/* <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </Card> */}


                </div>
            )
        }
    }

    export default Form;
