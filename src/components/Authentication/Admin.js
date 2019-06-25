import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        this.getOrders()
    }

    getOrders() {
        axios.get('/api/orders')
        .then(response => this.setState({orders: response.data}))
        .catch(error => console.log(error))
    }

    render() {
        console.log(this.state.orders)
        const {orders} = this.state
        return (

            <div style={{color: 'white'}}>

            <div> {orders.map((order, index) => {
                return (
                    <p key={index}> {order.users_id} </p>
                )
            })} </div>











            <h1>POPCORN</h1>
            <Link to='/'><button>Home</button></Link>
            </div>
        )
    }
}

export default Admin;