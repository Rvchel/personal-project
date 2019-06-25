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
        // this.props.removeFromCart()
    }

    render() {
        console.log(this.props.user)
        return (
            <div>

                <div id='cartContainer'>
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

                                    <button onClick={() => this.props.removeFromCart(this.props.id, this.props.price)}>Delete</button>
                                    {/* {this.props.user.total} */}

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

                <div style={{color: 'white'}}>{parseFloat(Math.round(this.props.user.total * 100) / 100).toFixed(2)}</div>
                {console.log(this.props.user.total)}
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