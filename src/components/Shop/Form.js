    import React, {Component} from 'react';
    import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
        CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
        import { makeStyles } from '@material-ui/core/styles';
        import Fab from '@material-ui/core/Fab';
        import Icon from '@material-ui/core/Icon';
    import axios from 'axios';
import { relative } from 'path';

    class Form extends Component {
        constructor(props) {
            super(props) 
            this.state = {
                pets: [],
                name: '',
                newName: '',
                imgUrl: '',
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

        addPet(e, catname, img) {
            // console.log(catname, img)
            e.preventDefault()
            const {name, imgUrl} = this.state
            axios.post('/api/pets', {
                catname: `${name}`,
                img: `${imgUrl}`
            })
            .then(response => this.setState({pets: response.data})).catch(error => console.log(error))
            // .then(response => this.updatePet(response.data)).catch(error => console.log(error))
        } 

        editPet(e, pet) {
            e.preventDefault()
            const {pets} = this.state
            axios.put(`/api/pet/${pet.id}`, {catname: pet.catname, img: pet.img})
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
                <div> 
                <div style={{display: 'flex', flexFlow: 'row', display: 'flex', flexWrap: 'wrap'}}>
                    {this.state.pets.map((pet, index) => (
                        this.state.pets.length 
                        ?
                        <Card style={{width: 700,
                                    height: 400,
                                    marginLeft: 30,
                                    marginTop: 40
                                    }} color='dark'key={index}>
                            <div><img src={pet.img} style={{width: 200,
                                                                height: 200,
                                                                marginBottom: 30,
                                                                borderRadius: 100,
                                                                marginLeft: 10,
                                                                marginTop: 5}} />
                            <div>
                            <h2>{pet.catname}</h2>
                            <Button style={{marginLeft: 200, marginTop: 100}} onClick={() => this.deletePet(pet.id)}>Delete</Button>
                            </div>

                            
                            <div style={{marginLeft: 290, marginTop: -50}}>
                            <Fab style={{outline: 'none'}} color="secondary" aria-label="Edit">
                                <Icon onClick={() => this.openEditor(index)}>edit_icon</Icon>
                            </Fab>
                            </div>
                            

                            {this.state.editorOpen && this.state.editorIndex === index
                                ?
                                <form>
                                    <h3>Edit {this.state.toEdit}</h3>
                                    <input name='catname' value={pet.catname} onChange={e => {this.handleChange(e, index)}} />
                                    <input name='img' value={pet.img} onChange={e => {this.handleChange(e, index)}} />
                                    <Button onClick={e => this.editPet(e, pet)}>Submit</Button>
                                </form>
                                :
                                null
                            }
                            </div> </Card>
                            :
                            null
                    ))} </div>

                    {/* ADDING PET */}
                <div> <Card color='dark' style={{marginTop: 450, marginRight: 400, marginLeft: 400}}>
                        Pet name:
                        <input name='name' value={this.state.name} onChange={e => this.createHandleChange(e)} />

                        Pet Image: 
                        <input name='imgUrl' value={this.state.imgUrl} onChange={e => this.createHandleChange(e)} />

                        <button onClick={e => this.addPet(e, this.state.name, this.state.imgUrl)}>Add Pet!</button>
                    </Card> 
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
