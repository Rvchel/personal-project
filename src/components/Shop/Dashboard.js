import React, {Component} from 'react';
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
        return (
            <div>
                <div>Dashboard</div>

                <div>{this.state.products.map((products, index)=> (

                    <Product
                    key={index}
                    image={products.image}
                    price={products.price}
                    description={products.description}
                    />

                ))}</div>

            </div>
        )
    }
}

export default Dashboard;