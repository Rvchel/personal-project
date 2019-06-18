import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
        this.props.getUser()
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
                                    </div>
                                )
                            })
                        :
                        //add items to cart
                            null
                    :
                    //please log in
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
    {getUser}
) (Cart);