import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, addToCart} from '../../redux/reducer';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        this.props.getUser() 
    }


    render() {
        // console.log(this.props.user)
        return (
            <div>
            <div>

                {/* db info being pulled from front, then map in other component. */}
                <div><img className='productImage' src={this.props.image} /></div>
                <div>Price: ${this.props.price}</div>
                <div>{this.props.description}</div>

                {/* <div><button id='addToCart' onClick={() => this.props.addToCart(this.props.id , this.props.price)}>Add To Cart</button></div> */}

                <IconButton id='addToCart' onClick={() => this.props.addToCart(this.props.id , this.props.price)} aria-label="Add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>


            </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getUser: getUser, addToCart: addToCart}
) (Product);