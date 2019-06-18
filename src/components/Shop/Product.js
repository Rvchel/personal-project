import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserSession, addItemToCart} from '../../redux/reducer';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.addItemToCartLocal = this.addItemToCartLocal.bind(this);
    }

    // componentDidMount() {
    //     axios.get(`/api/cart/${this.props.match.params.id}`)
    //     .then(response => {
    //         console.log(this.props.match.params.id)
    //         this.setState({products: response.data})
    //     })
    // }






    render() {
        return (

            
            <div>

                {/* db info being pulled from front, then map in other component. */}
                <div><img src={this.props.image} /></div>
                <div>Price: {this.props.price}</div>
                <div>{this.props.description}</div>

                {/* <div><button onClick={this.props.getUserSession}>Add</button></div> */}
                <div><button onClick={this.addItemToCartLocal}>Add</button></div>


            </div>
        )
    }

    addItemToCartLocal() {

        axios.post(`/api/cart/${this.props.id}`).then(res => {
            // res.data is the updated cart in this case
            this.props.addItemToCart(res.data);
        });

    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps, 
    {getUserSession: getUserSession, addItemToCart: addItemToCart}
) (Product);