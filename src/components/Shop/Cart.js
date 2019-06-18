import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Component {
    componentDidMount() {
        console.log("this is  cart",this.props.cart)
    }
    render() {
        return (
            <div>
                Cart
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps
) (Cart);