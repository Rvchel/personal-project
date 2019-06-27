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
            
        }
        this.handleToken = this.handleToken.bind(this);
    }

    componentDidMount() {
        this.props.getUser()
        // this.props.removeFromCart()
    }

    //stripe
    async handleToken(token) {
        console.log({token})
        // console.log(status)

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
        console.log(this.props.user)
        let {total, cart, user} = this.props.user
        return (
            <div>
                <Link to='/'><button>Home</button></Link>
                <button>Checkout</button>
                <StripeCheckout
                        stripeKey='pk_test_7UPcgjT9ckqzezpfx7yHq6Hm00EIr2MpDt'
                        token={this.handleToken}
                        billingAddress
                        shippingAddress
                        amount={total *100}
                        name={'Catz'}
                    />
                        <div id='cartTotal'>Total: ${parseFloat(Math.round(this.props.user.total * 100) / 100).toFixed(2)}</div>
                        {console.log(this.props.user.total)}

                <div id='cartContainer'>
                    {this.props.user
                    ?
                        this.props.user.cart
                        ?
                            this.props.user.cart.map((item, index) => {
                                return(
                                    <div key={index}>

                                <div id='cartImageContainer'>
                                    <img id='cartImage' src={item[0].image} />
                                </div>
                                <div id='cartDescriptionContainer'>
                                    {item[0].description}
                                </div>
                                <div id='cartPriceContainer'>
                                    ${item[0].price}
                                </div>
                                    

                                <div id='cartDeleteButton'>
                                    <button id='cartDeleteButton' onClick={() => this.props.removeFromCart(this.props.id, this.props.price)}>Delete</button>
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