import axios from 'axios';

const initialState = {
    loading: false,
    user: {},
    admin: false
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

// export function removeFromCart(id, price) {
//     return {
//         type: REMOVE_FROM_CART,
//         payload: axios.delete(`/api/cart/${id}`, {price})
//     }
// }
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/api/cart/${id}`)
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

        //Added
        case `${REMOVE_FROM_CART}_PENDING`:
        return {
            ...state,
            loading: true
        }

        case `${REMOVE_FROM_CART}_FULFILLED`:
        return {
            ...state,
            user: action.payload.data,
            loading: false
        }

        default: return state;
    }
}

