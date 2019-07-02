import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Cards from '../../Styles/reactstrap/Cards';
import Form from './Form';
import Product from './Product';
import axios from 'axios';
import { getUser } from '../../redux/reducer';
import cart from '../../Styles/cart.png';

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

    foodProducts() {
        let food = this.state.products.filter(product => {
            return product.category === 'food'
        })
        this.setState({products: food})
    }

    toyProducts() {
        let toys = this.state.products.filter(product => {
            return product.category === 'toys'
        })
        this.setState({products: toys})
    }


    render() {
        // console.log(this.props)
        // console.log(this.props.user)

        return (
            <div id='mainDashboardContainer'>

                <div id='dashMainButtons'>
                    <div id='dashboardCatz'>Catz</div>
                    <div><Link to='/'><button id='dashboardHomeButton'>HOME</button></Link></div>
                    <div id='cartButton'><Link to='/cart'><img id='cartIcon' src={cart}/></Link></div>
                </div>

                <div>
                <div>
                <div id='productContainer'>{this.state.products.map((products, index)=> (

                    <Product
                    key={index}
                    image={products.image}
                    price={products.price}
                    description={products.description}
                    id={products.id} />

                ))}</div> </div> </div>

                {/* NEED TO FIX FILTER */}
                <div id='filterButtons'>
                    <button id='allButton' onClick={() => this.getProducts()}>All</button>
                    <button id='foodButton' onClick={() => this.foodProducts('food')}>Food</button>
                    <button id='toysButton' onClick={() => this.toyProducts('toys')}>Toys</button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getUser}
) (Dashboard);