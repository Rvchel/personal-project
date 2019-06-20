import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {

        }
    
    
    
    
    
    }
    render() {
        return (

            <div>
                <Link to='/'><button>Home</button></Link>

                <div>
                    Add Your Pet!
                </div>
                
                <div>
                <button>Edit</button>
                </div>
            </div>
        )
    }
}

export default Gallery;