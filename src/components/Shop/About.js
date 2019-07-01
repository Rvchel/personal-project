import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

            <div id='email'>
                Name:
                <input name='name' value={this.state.name} onChange={this.handleChange} />
                Subject:
                <input name='subject' value={this.state.subject} onChange={this.handleChange} />
                Text:
                <input name='body' value={this.state.body} onChange={this.handleChange} />

                <button id='emailButton' onClick={this.sendEmail}>Send</button>
            </div>

            </div>
        )
    }
}

export default About;