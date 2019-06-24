import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Cards from '../../Styles/reactstrap/Cards';
import Form from './Form';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts() {
        axios.get('/api/products')
        .then(response => {
            console.log(response.data)
            this.setState({products: response.data})
        })
    }



    render() {
        console.log(this.state.products)
        return (
            <div>

                <div>Dashboard</div>

                <Link to='/cart'><button>Cart</button></Link>

                <Link to='/'><button>Home</button></Link>

                <div>
                <div>{this.state.products.map((products, index)=> (

                    <Product
                    key={index}
                    image={products.image}
                    price={products.price}
                    description={products.description}
                    id={products.id} />

                ))}</div> </div>

                {/* Might add form for new products? */}
                {/* <Form /> */}

            </div>
        )
    }
}

export default Dashboard;