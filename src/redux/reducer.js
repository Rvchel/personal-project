import axios from 'axios';

const initialState = {
    loading: false,
    user: {}, 
    currentProduct: [],
    products: []
}

const GET_USER = 'GET_USER';
const ADD_TO_CART = 'ADD_TO_CART';

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user').catch((error) => error)
    }
}

export function addToCart(product, price) {
    return {
        type: ADD_TO_CART,
        payload: axios.post(`/api/cart/${product}`, {price})
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

        default: return state;
    }
}

