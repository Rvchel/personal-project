import axios from 'axios';

const initialState = {
    loading: false,
    user: {}, 
    userSession: [],
    currentProduct: [],
    products: [],
    cart:[]
}

const GET_USER = 'GET_USER';
const GET_USER_SESSION = 'GET_USER_SESSION';
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user').catch((error) => error)
    }
}

export function getUserSession() {
    const data = axios.get('/auth/user').then(res => {console.log('data', res)}).catch((error) => error)
    return {
        type: GET_USER_SESSION,
        payload: data
    }
}

export function addItemToCart(updatedCart) {
    
    return {
        type: ADD_ITEM_TO_CART,
        updatedCart
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

        case `${GET_USER_SESSION}`:
        return {
            ...state,
            user: action.payload.data
        }
        
        case ADD_ITEM_TO_CART:
            console.log(action.updatedCart);
            return {
                ...state, 
                cart: action.updatedCart
            };

        default: return state;
    }
}

