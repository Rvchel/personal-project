import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser, removeFromCart} from '../../redux/reducer';
import StripeCheckout from 'react-stripe-checkout'
import {toast} from 'react-toastify';
import axios from 'axios';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            user: {},
            total: 0
        }
        this.handleToken = this.handleToken.bind(this);
    }

    componentDidMount() {
        this.props.getUser()
    }

    //stripe
    async handleToken(token) {

        let {cart, total} = this.props.user
        const response = await axios.post('/api/checkout', {token, cart, total})
        const {status} = response.data
        
            if(status === 'success') {
                toast('Success! Check email for details.', {type: "success"})
            } else {
                toast('Something went wrong...', {type: 'error'})
            }
        }

    render() {
        // console.log(this.props.user)
        let {total, cart, user} = this.props.user
        return (
            <div>
                <div id='cartConatiner'>
                <div id='cartCatz'>Catz</div>
                <Link to='/'><button id='cartHomeButton'>HOME</button></Link>
            </div>

            <div id='checkoutButtonsContainer'>
                        <div id='cartCheckoutText'>CHECKOUT</div>
                        <div id='cartTotal'>Cart Total: ${parseFloat(Math.round(this.props.user.total * 100) / 100).toFixed(2)}</div>
                
                <div id='stripeButton'><StripeCheckout
                        stripeKey='pk_test_7UPcgjT9ckqzezpfx7yHq6Hm00EIr2MpDt'
                        token={this.handleToken}
                        billingAddress
                        shippingAddress
                        amount={total *100}
                        name={'Catz'}
                    /></div>
            </div>

                <div id='cartContainer'>
                    {this.props.user
                    ?
                        this.props.user.cart
                        ?
                            this.props.user.cart.map((item, index) => {
                                return(
                                    <div key={index}>

    <div id='cartInfoContainer'>
        <div>
            <img id='cartImage' src={item[0].image} />
        </div>
    <div id='imageInfoContainer'>
        <div id='cartDescriptionContainer'>
            {item[0].description}
        </div>
        <div id='cartPriceContainer'>
            ${item[0].price}
        </div>
        <div id='cartDeleteButton'>
        <button onClick={() => {this.props.removeFromCart(index)}}>Delete</button>
        </div>
    </div> 
    </div>      

                                    </div>
                                )
                            })
                        :
                        //Add items to cart
                            null
                    :
                    //Please log in
                        null
                    }
                
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getUser, removeFromCart}
) (Cart);