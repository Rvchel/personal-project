import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
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






    render() {
        if(this.state.redirect) {
            console.log('working')
            return <Redirect to='/' />
        }

        return (
            <div>

                <h3>Create an Account</h3>

                <div>

                Username:
                <input placeholder='Username' onChange={this.handleUsername} />

                Password:
                <input placeholder='Password' onChange={this.handlePassword} />

                </div>

                <button onClick={this.registerUser}>Register</button>

            </div>
        )
    }
}

export default Register;