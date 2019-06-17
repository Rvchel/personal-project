import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {

        }
    
    
    
    
    
    }
    render() {
        return (
            <div>

                <h3>Create an Account</h3>

                <div>

                Username:
                <input placeholder='Username' />

                Password:
                <input placeholder='Password' />

                </div>

                <button>Register</button>

            </div>
        )
    }
}

export default Register;