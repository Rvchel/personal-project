import axios from 'axios';

const initialState = {
    loading: false,
    user: {}, 

    //Not sure if need these yet!?!?!?!?!?!?!

    // currentProduct: [],
    // products: []
}

const GET_USER = 'GET_USER';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


//Gets user object from auth controller
export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user').catch((error) => error)
    }
}

//Adds product and price to the user cart
export function addToCart(product, price) {
    return {
        type: ADD_TO_CART,
        payload: axios.post(`/api/cart/${product}`, {price})
    }
}

//Hopfully make this remove an item from user cart
export function removeFromCart(id, price) {
    return {
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/api/cart/${id}`, {price})
    }
}

export default function reducer(state = initialState, action) {
    // console.log(state)
    switch(action.type) {
        case `${GET_USER}_FULFILLED`:
        return {
            ...state,
            loading: false,
            user: action.payload.data
        }

        case `${GET_USER}_PENDING`:
        return {
            ...state,
            loading: true
        }

        case `${ADD_TO_CART}_FULFILLED`:
        return {
            ...state,
            user: action.payload.data
        }

        case `${REMOVE_FROM_CART}_FULFILLED`:
        return {
            ...state,
            user: action.payload.data
        }

        default: return state;
    }
}

