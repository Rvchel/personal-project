import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
//NEED TO FIX LOGIN PASSWORD

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
        .then((response) => {this.setState({redirect: true}, ()=> {this.updateUser(this.props.user)});})
        .catch(error => console.log('Login Wrong'))
    }






    render() {
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
            <input type="Username" name="Username" id="exampleEmail" placeholder="Username" onChange={this.handleUsername}  />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <input placeholder="Password" type='password' onChange={this.handlePassword} />
            </FormGroup>
            <Button onClick={this.loginUser}>Login</Button>
        </Form>

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