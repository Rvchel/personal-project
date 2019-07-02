import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import cat from '../../Styles/cat.png'
import axios from 'axios';

class About extends Component {
    constructor() {
        super();
        this.state = {
            subject: '',
            body: '',
            name: ''
        }
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    sendEmail() {
        const {subject, body, name} = this.state
        axios.post('/nodemailer/send', {subject, body, name})
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        return (
            <div>

            <div id='aboutContainer'>
                <div id='aboutCatz'>Catz</div>
                <div id='aboutHomeButton'><Link to='/'><button id='aboutHomeButton'>HOME</button></Link></div>
            </div>

            <h1 id='aboutParagraph'>
                What is Catz? Catz is a website created by me, Rachel, who was inspired by other cat websites along with pet stores and breeder pages. 
                I made this website to give info about cats, show cat products, and to be able to add your pet to show off to the world. I made this 
                website club based so that you can sign up to view your cart and all products. I would like to think this is the cat version of the 
                AKC but with more, or less, not really sure. I guess the real AKC version of cats is the CFA, but still mine is basically the 
                same but with less functionality.
            </h1>

            <h1 id='aboutQuestionsText'>Have Questions? Email us!<img id='aboutCat' src={cat}/></h1>

            <div id='email'>
                <h1 className='emailText'>Name:</h1>
                <input name='name' value={this.state.name} onChange={this.handleChange} />
                <h1 className='emailText'>Subject:</h1>
                <input name='subject' value={this.state.subject} onChange={this.handleChange} />
                <h1 className='emailText'>Text:</h1>
                <input id='textAbout' name='body' value={this.state.body} onChange={this.handleChange} />

                <button id='emailButton' onClick={this.sendEmail}>Send</button>
            </div>

            </div>
        )
    }
}

export default About;