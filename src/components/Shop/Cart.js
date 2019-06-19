import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser, removeFromCart} from '../../redux/reducer';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getUser()
        this.props.removeFromCart()
    }

    render() {
        console.log(this.props.user)
        return (
            <div>
                {/* pull user object and map over it */}
                Cart

                <div>
                    {this.props.user
                    ?
                        this.props.user.cart
                        ?
                            this.props.user.cart.map((item, index) => {
                                return(
                                    <div key={index}>

                                    {item[0].description}
                                    <img src={item[0].image} />
                                    ${item[0].price}

                                    <button onClick={() => this.props.removeFromCart(this.props.id, this.props.price)}>Execute</button>

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

                <Link to='/'><button>Home</button></Link>

            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getUser, removeFromCart}
) (Cart);