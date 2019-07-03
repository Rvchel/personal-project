import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Breeds extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    render() {
        return (
            <div>

                <div id='breedsContainer'>
                    <div id='breedsCatz'>Catz</div>
                    <Link to='/'><button id='breedsHomeButton'>HOME</button></Link>
                </div>

                <h1 id='breedsText'>Breeds</h1>

                    <div className='breedInfoContainer'>
                        <img className='breedPicture' src={'https://indulgeyourpet.com/wp-content/uploads/Munchkin-Kitten.png'} />

                        <h1 className='breedParagraph'>
                        Munchkin Cat Breed Fast facts
                        <li>Country of Origin:  United States</li>
                        <li>Size:  Medium in size, yet very short in stature</li>
                        <li>Weight:  8 to 10 pounds</li>
                        <li>Eyes:  Walnut</li>
                        <li>Head shape:  Round</li>
                        <li>Life Span: 10 to 13 years plus</li>
                        </h1>

                    </div>

                    <div className='breedInfoContainer'>
                        <img className='breedPicture' src={'https://indulgeyourpet.com/wp-content/uploads/Scottish-Fold-Kitten.png'} />

                        <h1 className='breedParagraph'>
                        Scottish Fold Cat Breed Fast Facts
                        <li>Country of Origin:  Scottish</li>
                        <li>Size:  Medium</li>
                        <li>Weight:  10 to 12 pounds</li>
                        <li>Eyes:  Large round eyes</li>
                        <li>Shape of Head:  Round</li>
                        <li>Lifespan:  Approximately 15 years</li>
                        </h1>

                    </div>

                    <div className='breedInfoContainer'>
                        <img className='breedPicture' src={'https://indulgeyourpet.com/wp-content/uploads/Sphynx-Kitten.png'} />

                        <h1 className='breedParagraph'>
                        Sphynx Cat Breed Fast Facts
                        <li>Country of Origin:  Canada</li>
                        <li>Size:  Medium</li>
                        <li>Weight:  8 to 10 pounds</li>
                        <li>Eyes:  Large and round</li>
                        <li>Shape of Head:  Wedge shaped</li>
                        <li>Lifespan:  13 to 15 years</li>
                        </h1>

                    </div>

                    <div className='breedInfoContainer'>
                        <img className='breedPicture' src={'https://indulgeyourpet.com/wp-content/uploads/Selkirk-Rex-Kitten.png'} />

                        <h1 className='breedParagraph'>
                        Selkirk Rex Cat Breed Fast Facts
                        <li>Country of Origin:  United States</li>
                        <li>Size:  Small to medium</li>
                        <li>Weight:  9 to 11 pounds</li>
                        <li>Eyes: Large round eyes</li>
                        <li>Shape of Head:  Round</li>
                        <li>Lifespan:  10 to 15 years</li>
                        </h1>

                    </div>

                    <div className='breedInfoContainer'>
                        <img className='breedPicture' src={'https://indulgeyourpet.com/wp-content/uploads/Ragdoll-Kitten.png'} />

                        <h1 className='breedParagraph'>
                        Ragdoll Cat Breed Fast Facts
                        <li>Country of Origin:  United States of America</li>
                        <li>Size:  Large</li>
                        <li>Weight:  14 to 18 pounds</li>
                        <li>Eyes:  Oval (blue)</li>
                        <li>Shape of Head:   Round</li>
                        <li>Lifespan:  15 to 20 years</li>
                        </h1>

                    </div>

                    <h1>Pictures from: indulgeyourpet.com</h1>

                </div>
        )
    }
}

export default Breeds;