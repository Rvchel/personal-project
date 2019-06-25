import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Cards from '../../Styles/reactstrap/Cards';
import Form from './Form';
import Product from './Product';
import axios from 'axios';
import { getUser } from '../../redux/reducer';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            redirect: false
        }
    }

    componentDidMount() {
        this.getProducts()
        this.props.getUser()
    }

    getProducts() {
        axios.get('/api/products')
        .then(response => {
            console.log(response.data)
            this.setState({products: response.data})
        })
    }



    render() {
        // console.log(this.props)
        // console.log(this.props.user)

        return (
            <div style={{color: 'white'}}>

                <div>
                <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/cart'><button id='cartButton'>Cart</button></Link>
                <div id='productContainer'>{this.state.products.map((products, index)=> (

                    <Product
                    key={index}
                    image={products.image}
                    price={products.price}
                    description={products.description}
                    id={products.id} />

                ))}</div> </div> </div>

                {/* Might add form for new products? */}
                {/* <Form /> */}

            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getUser}
) (Dashboard);