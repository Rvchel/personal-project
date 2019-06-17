import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Club extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        axios.post('/auth/user').then(response => console.log(response.data));
    }



    render() {
        return (
            <div>
                Club Landing
                <Link to='/login'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

export default Club;