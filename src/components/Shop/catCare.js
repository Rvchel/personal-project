import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class catCare extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    render() {
        return (
            <div>

            <div id='catCareContainer'>
                <div id='catzCare'>Catz</div>
                <Link to='/'><button id='careHomeButton'>HOME</button></Link>
            </div>

        <h1 className='catCareTitles'>How To Choose The Best Toy For Your Cat.</h1>
            <div className='catCareInfo'>
                <img className='catCareImages' src={'https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} />

                <ol>
                    <li>Safety – Can this toy get lodged in my cat’s throat, causing them to choke?</li>
                    <li>Size – Is the toy so large that it could hurt my cat? Is it so small that it presents a choking hazard?</li>
                    <li>Exercise – Does this toy facilitate active playtime to help my cat stay athletic and fit?</li>
                    <li>Durability – Will I have to replace this toy often? Could it become dangerous when/if it starts to fall apart?</li>
                </ol>

            </div>

        <h1 className='catCareTitles'>Essential Items For New Cat Owners.</h1>
            <div className='catCareInfo'>
                <img className='catCareImages' src={'https://images.pexels.com/photos/2401994/pexels-photo-2401994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} />

                <ol>
                    <li>Good reputable food.</li>
                    <li>Food bowls.</li>
                    <li>Cat toys.</li>
                    <li>Litter box.</li>
                    <li>Reputable litter.</li>
                </ol>

            </div>

            <h1 className='catCareTitles'>A Kitten Or An Older Cat?</h1>
            <div className='catCareInfo'>
                <img className='catCareImages' src={'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} />

                <ol>
                    <li>A cat is considered a kitten throughout the first six months of its life. To some extent, the behaviors described here can be displayed through the cat's first year.</li>
                    <li>The younger the kitten, the more likely you are to be emotionally needed (and physically kneaded!) by your kitten.</li>
                    <li>With an adult cat, you know what the cat's actual character is like and there are fewer surprises. Shy and timid, or friendly and outgoing, the cat has established his or her temperament and if you adopt from someone who knows the cat, you know what you're getting into.</li>
                    <li></li>
                    <li></li>
                </ol>

            </div>

            </div>
        )
    }
}

export default catCare;