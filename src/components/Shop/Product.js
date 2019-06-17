import React from 'react';

function Product(props) {
        return (

            <div>

                <div><img src={props.image} /></div>
                <div>Price: {props.price}</div>
                <div>{props.description}</div>

            </div>
        )
}

export default Product;