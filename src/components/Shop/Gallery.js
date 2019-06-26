import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Form from './Form';
import axios from 'axios';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            pets: [],
        }
    }


    render() {
        console.log(this.state)
        return (

            <div>
                <div id='blogContainer'>
                    <div id='catzBlog'>Catz</div>
                    <Link to='/'><button id='galleryHomeButton'>HOME</button></Link>
                </div>
                
                <div>
                
                </div>

                <Form />

            </div>
        )
    }
}

export default Gallery;