import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
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

    loginUser() {
        axios.post('/auth/login', {username: this.state.username, password: this.state.password})
        .then((response) => this.setState({redirect: true}))
        .catch(error => console.log('Login Wrong'))
    }






    render() {


        if(this.state.redirect) {
            console.log('Logged in.')
            return <Redirect to='/' />
        }



        return (
            <div>

                <div>Welcome Back!</div>

                <div>

                    Username:
                    <input placeholder='Username' onChange={this.handleUsername} />

                    Password:
                    <input placeholder='Password' type='password' onChange={this.handlePassword} />

                </div>

                <button onClick={this.loginUser}>Login</button>

            </div>
        )
    }
}

export default Login;