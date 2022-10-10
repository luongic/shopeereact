import { ActionTypes } from "../contans/action-types";

const initialState = {
    products:[],
    total: 0,
}

export const productReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload.products, total:payload.total}

        case ActionTypes.FILTER_PRODUCT_BY_ID:
            return {...state, products: state.products.slice().sort((a, b) => {
                return a.id - b.id;
            })}
            
        case ActionTypes.FILTER_PRODUCT_BY_RATE:
            return {...state, products: state.products.slice().sort((a, b) => {
                return b.rating - a.rating;
            })}

        case ActionTypes.FILTER_PRODUCT_BY_STOCK:
            return {...state, products: state.products.slice().sort((a, b) => {
                return a.stock - b.stock;
            })}

        case ActionTypes.FILTER_PRODUCT_BY_PRICE_DOWN:
            return {...state, products: state.products.slice().sort((a, b) => {
                return b.price - a.price;
            })}

        case ActionTypes.FILTER_PRODUCT_BY_PRICE_UP:
            return {...state, products: state.products.slice().sort((a, b) => {
                return a.price - b.price;
            })}
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