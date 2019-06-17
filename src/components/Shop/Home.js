import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    
    
    
    
    
    }
    render() {
        return (
            <div>
                Home
                <Link to='/club'><button>Cat Club</button></Link>
                <Link to='/dashboard'><button>Products</button></Link>
            </div>
        )
    }
}

export default Home;