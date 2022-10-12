import { ActionTypes } from "../contans/action-types"

export const setCart = (products) => {
    return {
        type: ActionTypes.SET_CART,
        payload: products,
    }
}

export const addToCart = (products) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: products,
    }
}

export const deleteItemCart = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id,
    }
}
