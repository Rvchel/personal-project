import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {

        }
    
    
    
    
    
    }
    render() {
        return (
            <div>

                <h3>Welcome Back!</h3>

                <div>

                    Username:
                    <input placeholder='Username' />

                    Password:
                    <input placeholder='Password' />

                </div>

                <button>Login</button>

            </div>
        )
    }
}

export default Login;