import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

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
            return <Redirect to='/dashboard' />
        }

        if(this.state.redirect === true && this.state.user.admin === false) {
            console.log('logged in customer.')
            return <Redirect to='/'/>
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