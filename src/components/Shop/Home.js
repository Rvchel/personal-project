import React, {Component} from 'react';
import Example from '../../Styles/reactstrap/Example';
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
                <Link to='/club'><button id='catClubButton' className='homeButton'>CAT CLUB</button></Link>
                </div>
                
                <div id='mainButtons'>
                <Link to='/dashboard'><button className='homeButton'>PRODUCTS</button></Link>
                <button className='homeButton'>BREEDS</button>
                <button className='homeButton'>ABOUT</button>
                {/* Might need to change link back to gallery */}
                <Link to='/gallery'><button className='homeButton'>BLOG</button></Link>
                </div>

            </div>

                <div id='carouselBorder'>
                <div id='carouselContainer'><Example /></div>
                </div>

                <div id='friendText'>
                    FIND YOUR BEST FRIEND AND COMPANION!
                </div>
                <div>
                <Link to='/club'><button id='signUpLink'>Sign up with us now!</button></Link>
                </div>

        </div>
        )
    }
}

export default Home;