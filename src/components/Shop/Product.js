import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from '../../redux/reducer';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.addItemToCartLocal = this.addItemToCartLocal.bind(this);
    }

    addItemToCartLocal() {

        axios.post(`/api/cart/${this.props.id}`).then(res => {
            // res.data is the updated cart in this case
            this.props.addItemToCart(res.data);
        });

    }






    render() {
        return (

            
            <div>

                {/* db info being pulled from front, then map in other component. */}
                <div><img src={this.props.image} /></div>
                <div>Price: {this.props.price}</div>
                <div>{this.props.description}</div>

                <div><button onClick={this.addItemToCartLocal}>Add</button></div>


            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps, 
    {addItemToCart: addItemToCart}
) (Product);