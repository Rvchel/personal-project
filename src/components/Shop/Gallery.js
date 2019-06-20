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

    // componentDidMount() {
    //     axios.get('/api/pets').then(response => {
    //         this.setState({pets: response.data})
    //     })
    // }

    render() {
        // console.log(this.state.pets[0])
        console.log(this.state.pets)
        console.log(this.state.pets.petImg)
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