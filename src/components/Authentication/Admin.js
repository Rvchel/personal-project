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

            <div className='adminPage' >
            <Link to='/'><button>Home</button></Link>

            <p className='ordersText'>ORDERS:</p>
            <div className='adminOrders'> {orders.map((order, index) => {
                return (
                    <p key={index}> order id:{order.users_id} user:{order.username} product id:{order.products_id} state:{order.state} zip:{order.zip} city:{order.city} total: ${order.total} quantity:{order.quantity} </p>
                )
            })} </div>

            </div>
        )
    }
}

export default Admin;