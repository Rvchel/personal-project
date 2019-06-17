import React from 'react';

function Product(props) {
        return (

            <div>

                {/* db info being pulled from front, then map in other component. */}
                <div><img src={props.image} /></div>
                <div>Price: {props.price}</div>
                <div>{props.description}</div>
                <div><button>Add</button></div>

            </div>
        )
}

export default Product;