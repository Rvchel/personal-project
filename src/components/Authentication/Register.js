import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false,
            modal: false
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.toggle = this.toggle.bind(this);
    }




    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    registerUser() {
        axios.post('/auth/register', {username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true}))
        .catch((error) => {error: console.log('Cant Log In.')})
    }

        toggle() {
            this.setState(prevState => ({
            modal: !prevState.modal
            }));
        }






    render() {
        if(this.state.redirect) {
            console.log('working')
            return <Redirect to='/' />
        }

        return (
            <div>

        <div>
            <Button id='registerButtonModal' outline color="light" onClick={this.toggle}>Register{this.props.buttonLabel}</Button>{' '}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader style={{fontFamily: 'Poppins, sans-serif'}} toggle={this.toggle}>Create Account</ModalHeader>
            <ModalBody>
            <div style={{marginLeft: 150}}>
                <div style={{display: 'flex', marginBottom: 50}}>
                <input style={{fontFamily: 'Poppins, sans-serif'}} placeholder='Username' onChange={this.handleUsername} /></div>
                <div><input style={{fontFamily: 'Poppins, sans-serif'}} placeholder='Password' type='password' onChange={this.handlePassword} /></div>
                <div><Link to='/login'><Button style={{fontFamily: 'Poppins, sans-serif'}} color="link">Already a User?</Button></Link></div>
            </div>
            </ModalBody>
            <ModalFooter>
                <Button style={{fontFamily: 'Poppins, sans-serif'}}  color="secondary" onClick={this.toggle} onClick={this.registerUser}>Register</Button>{' '}
                <Button style={{fontFamily: 'Poppins, sans-serif'}} color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>

            </div>
        )
    }
}

export default Register;