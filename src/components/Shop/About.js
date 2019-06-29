import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class About extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    render() {
        return (

            <div id='aboutContainer'>
                <div id='aboutCatz'>Catz</div>
                <div id='aboutHomeButton'><Link to='/'><button id='aboutHomeButton'>HOME</button></Link></div>
            </div>
        )
    }
}

export default About;