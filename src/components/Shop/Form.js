import React, {Component} from 'react';
import { relative } from 'path';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import axios from 'axios';

    class Form extends Component {
        constructor(props) {
            super(props) 
            this.state = {
                pets: [],
                name: '',
                newName: '',
                imgUrl: '',
                petDescription: '',
                editorOpen: false,
                editorIndex: '',
                toEdit: '',
                editor: false,
                modal: false
            }
            this.updatePet = this.updatePet.bind(this);
            this.addPet = this.addPet.bind(this);
            this.editPet = this.editPet.bind(this);
            this.deletePet = this.deletePet.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.toggle = this.toggle.bind(this);

        }

        componentDidMount() {
            axios.get('/api/pets').then(response => {
                this.setState({pets: response.data})
            }) 
        }

        updatePet(update) {
            this.setState({pets: update, editorOpen: false, editorIndex: ''})
        }

        addPet(e, catname, img, description) {
            // console.log(catname, img)
            e.preventDefault()
            const {name, imgUrl, petDescription} = this.state
            axios.post('/api/pets', {
                catname: `${name}`,
                img: `${imgUrl}`,
                description: `${petDescription}`
            })
            .then(response => this.setState({pets: response.data})).catch(error => console.log(error))
            // .then(response => this.updatePet(response.data)).catch(error => console.log(error))
        } 

        editPet(e, pet) {
            e.preventDefault()
            const {pets} = this.state
            axios.put(`/api/pet/${pet.id}`, {catname: pet.catname, img: pet.img, description: pet.description})
            .then(response => {
                console.log(response.data)
                this.setState({editorOpen: false, editorIndex: ''})

        })
    }

        deletePet(pet) {
            // console.log('deletePetinForm', pet)
            axios.delete(`/api/pets/${pet}`).then(response => this.setState({pets: response.data})).catch(error => console.log(error))
        }

        handleChange(e, index) {
            // this.setState({[e.target.name]: e.target.value})
            let tempPets = this.state.pets
            // console.log(tempPets[index])
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

        toggle() {
            this.setState(prevState => ({
                modal: !prevState.modal
            }));
        }


        render() {
            console.log(this.state.pets)

            const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
            // console.log(this.state.img)
            console.log(this.state.pets)
            return (
                <div id='formContainer'>

                <div> <div id='addCat' color='dark'>
                        
                        <input className='addCatInput' placeholder='Name' name='name' value={this.state.name} onChange={e => this.createHandleChange(e)} />

                        
                        <input className='addCatInput' placeholder='Image' name='imgUrl' value={this.state.imgUrl} onChange={e => this.createHandleChange(e)} />

                        
                        <input className='addCatInput' placeholder='Description' name='petDescription' value={this.state.petDescription} onChange={e => this.createHandleChange(e)} />

                    </div> 
                        <Fab id='addCatButton' style={{color: 'black', outline: 'none'}} aria-label="Add">
                        <Icon onClick={e => this.addPet(e, this.state.name, this.state.imgUrl)}>add_icon</Icon>
                        </Fab>
                </div>


                <div style={{display: 'flex', flexFlow: 'row', display: 'flex', flexWrap: 'wrap'}}>
                    {this.state.pets.map((pet, index) => (
                        this.state.pets.length 
                        ?
                        // DISPLAYING INFO ABOUT PET
                        <Card style={{width: 350,
                                    height: 400,
                                    marginLeft: 30,
                                    marginTop: 40
                                    }} color='dark'key={index}>
                            <div><img src={pet.img} style={{width: 180,
                                                                height: 170,
                                                                marginBottom: 30,
                                                                borderRadius: 100,
                                                                marginTop: 5, 
                                                                marginLeft: 90,
                                                                }} />
                            
                            <h2 id='catName'
                            >{pet.catname}</h2>
                            <h2 id='catDescription'
                            >{pet.description}</h2>

                        <div id='blogButtons'>
                            <div>
                            <Fab id='blogTrashcan' style={{}}>
                            <Icon onClick={() => this.deletePet(pet.id)}>delete_icon</Icon>
                            </Fab>
                            </div>

                            <div>
                            <Fab id='blogEdit' color="secondary" aria-label="Edit">

                                <Icon onClick={this.toggle} onClick={() => this.openEditor(index)}>{this.props.buttonLabel}edit_icon</Icon>
                            </Fab>
                            </div>
                        </div>
                            

                            {/* FORM TO EDIT PET, OPEN & CLOSE EDITOR */}
                            {this.state.editorOpen && this.state.editorIndex === index
                                ?
                                <form id='editForm'>
                                    <h3>{this.state.toEdit}</h3>
                                    <input className='editCat' name='catname' value={pet.catname} onChange={e => {this.handleChange(e, index)}} 
                                    />
                                    <input className='editCat' name='img' value={pet.img} onChange={e => {this.handleChange(e, index)}}
                                    />
                                    <input className='editCat' name='description' value={pet.description} onChange={e => {this.handleChange(e, index)}} 
                                    />
                                    <Button className='editCat' onClick={e => this.editPet(e, pet)}>Submit</Button>
                                </form>
                                :
                                null
                            }
                            </div> </Card>
                            :
                            null
                    ))} </div>

                </div>

            )
        }
    }

    export default Form;
