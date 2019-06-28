import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Register from './Register';
import axios from 'axios';

class Club extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            user: {},
            redirect: false
        }
        this.handleLogout = this.handleLogout.bind(this);

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.toggle = this.toggle.bind(this);

        this.loginUser = this.loginUser.bind(this);
    }
    //LOGOUT
    handleLogout() {
        axios.post('/auth/user').then(response => console.log(response.data));
    }
                            //REGISTER
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
                                                        //LOG IN
                                                        loginUser() {
                                                        axios.post('/auth/login', {username: this.state.username, password: this.state.password})
                                                        .then((response) => {this.setState({redirect: true}); this.updateUser(response.data)})
                                                        .catch(error => console.log('Login Wrong'))
                                                    }

                                                    updateUser(user) {
                                                        this.setState({user})
                                                    }



    render() {
        console.log(this.props)
        console.log(this.props.user)
         // Checking to see if an admin or not and redirects to correct page. 
            if(this.state.redirect === true && this.state.user.admin === true) {
                console.log('Logged in admin.')
                return <Redirect to='/admin' />
            }

            if(this.state.redirect === true && this.state.user.admin === false) {
                console.log('logged in customer.')
                return <Redirect to='/'/>
            }
        return (
            <div id='clubBackgroundImage'>      
                <div id='clubContainer'>
                <div id='catzClub'>Catz Club</div>
                <Link to='/'><button id='clubHomeButton'>HOME</button></Link>
            </div>
                {/* <Link to='/'><Button style={{fontFamily: 'Poppins, sans-serif'}} outline color="light">Home</Button></Link> */}
                {/* <Link to='/login'><button>Login</button></Link> */}
                {/* <Link to='/register'><button>Register</button></Link> */}
                





    <div id='logoutButton'>
            <Button style={{fontFamily: 'Poppins, sans-serif', marginLeft: 150}} outline color="light" onClick={this.handleLogout}>Logout</Button>
            





            <Register />





        <div>
            <Button id='loginButtonModal' outline color="light" onClick={this.toggle}>Login{this.props.buttonLabel}</Button>{' '}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader style={{fontFamily: 'Poppins, sans-serif'}} toggle={this.toggle}>Login</ModalHeader>
            <ModalBody>
            <div style={{marginLeft: 150}}>
                <div style={{display: 'flex', marginBottom: 50}}>
                <input style={{fontFamily: 'Poppins, sans-serif'}} placeholder='Username' onChange={this.handleUsername} /></div>
                <div><input style={{fontFamily: 'Poppins, sans-serif'}} placeholder='Password' onChange={this.handlePassword} /></div>
                <div><Link to='/register'><Button style={{fontFamily: 'Poppins, sans-serif'}} color="link">New User?</Button></Link></div>
            </div>
            </ModalBody>
            <ModalFooter>
                <Button style={{fontFamily: 'Poppins, sans-serif'}}  color="secondary" onClick={this.toggle} onClick={this.loginUser}>Login</Button>{' '}
                <Button style={{fontFamily: 'Poppins, sans-serif'}} color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    </div>
                    <div id='catzClubText'>Catz</div>
            </div>
        )
    }
}

export default Club;