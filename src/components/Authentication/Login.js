import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            user: {},
            redirect: false
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }
    updateUser(user) {
        this.setState({user})
    }

    loginUser() {
        axios.post('/auth/login', {username: this.state.username, password: this.state.password})
        .then((response) => {this.setState({redirect: true}); this.updateUser(response.data)})
        .catch(error => console.log('Login Wrong'))
    }






    render() {


        console.log(this.state.user)
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
            <div>

                <div
                style={{ color: 'white',
                        fontSize: 30,
                        marginLeft: 400,
                        fontFamily: 'Poppins, sans-serif'}}>
                Welcome Back!</div>

<Form inline style={{marginLeft: 250,
            marginTop: 200}}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Input type="Username" name="Username" id="exampleEmail" placeholder="Username" onChange={this.handleUsername}  />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handlePassword} />
            </FormGroup>
            <Button onClick={this.loginUser}>Login</Button>
        </Form>

                {/* <Link to='/register'><button className='blah' style={{
                    color: 'white',
                    backgroundColor: 'transparent',
                    border: 'none',
                    marginLeft: 450,
                    marginTop: 20,
                    fontFamily: 'Poppins, sans-serif'
                }}>Not a User Yet?</button></Link> */}

                <Link to='/register'><Button outline color="secondary" style={{
                    marginLeft: 450,
                    marginTop: 50,
                    fontFamily: 'Poppins, sans-serif',
                    
                }}>New User?</Button>{' '}</Link>

            </div>
        )
    }
}

export default Login;