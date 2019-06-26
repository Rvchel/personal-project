import React, {Component} from 'react';
import Example from '../../Styles/reactstrap/Example';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../Styles/Style.css'

let image1 = 'https://images.pexels.com/photos/1629061/pexels-photo-1629061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
let image2 = 'https://images.pexels.com/photos/1643461/pexels-photo-1643461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
let image3 = 'https://images.pexels.com/photos/1353916/pexels-photo-1353916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

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
                <Link to='/gallery'><button className='homeButton'>BLOG</button></Link>
                </div>

            </div>

                <div id='carouselBorder'>
                <div id='carouselContainer'><Example /></div>
                </div>

        <div id='catCareText'>CAT CARE ADVICE</div>
            <div id='whiteDivContainer'>
                <div className='whiteDiv'><img className='catCareImage' src={image1} /></div>
                <div className='whiteDiv'><img className='catCareImage' src={image2} /></div>
                <div className='whiteDiv'><img className='catCareImage' src={image3}/></div>
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