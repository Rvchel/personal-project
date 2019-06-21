import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Form from './Form';
import axios from 'axios';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            pets: []
        }
    }

    render() {
        return (

            <div>
                <Link to='/'><button>Home</button></Link>
                
                <div>
                    
                </div>
                
                <div>
                <button>Edit</button>
                </div>

                <Form />

            </div>
        )
    }
}

export default Gallery;