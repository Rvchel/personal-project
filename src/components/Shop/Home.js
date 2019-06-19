import React, {Component} from 'react';
import Example from './Example';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../Styles/Style.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    
    
    
    
    
    }
    render() {
        return (
        <div id='homeContainer'>

            <div id='homeButtonsContainer'>

                <div id='clubContainer'>
                <div id='Catz'>Catz</div>
                <Link to='/club'><button className='homeButton'>Cat Club</button></Link>
                </div>
                
                <div id='mainButtons'>
                <Link to='/dashboard'><button className='homeButton'>Products</button></Link>
                <button className='homeButton'>Breeds</button>
                <button className='homeButton'>About</button>
                </div>

            </div>

                <div id='carouselBorder'>
                <div id='carouselContainer'><Example /></div>
                </div>

                <div id='friendText'>
                    Find Your New Best Friend!
                </div>

        </div>
        )
    }
}

export default Home;