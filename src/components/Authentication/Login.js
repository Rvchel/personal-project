import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
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
        .then(response => console.log('Login Complete!'))
    }






    render() {
        return (
            <div>

                <h3>Welcome Back!</h3>

                <div>

                    Username:
                    <input placeholder='Username' onChange={this.handleUsername} />

                    Password:
                    <input placeholder='Password' onChange={this.handlePassword} />

                </div>

                <button onClick={this.loginUser}>Login</button>

            </div>
        )
    }
}

export default Login;