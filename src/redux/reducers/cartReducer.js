import { ActionTypes } from "../contans/action-types";

const initialState = {
    cart:[],
}

export const cartReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_CART:
            return {...state, cart:payload}

        case ActionTypes.ADD_TO_CART:
            return {...state, cart:payload}
            
        case ActionTypes.REMOVE_FROM_CART:
            return {}

        
        default:
            return state
    }
    
}

