import { ActionTypes } from "../contans/action-types";

const initialState = {
    products:[],
    total: 0,
}

export const productReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload.products, total:payload.total}
    
        default:
            return state
    }
    
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {state}
        default:
            return state
    }
}