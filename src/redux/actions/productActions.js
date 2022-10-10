import { ActionTypes } from "../contans/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

// FILTER PRODUCT

export const filterbyID = () => {
    return {
        type: ActionTypes.FILTER_PRODUCT_BY_ID
    }
}

export const filterbyRATE = () => {
    return {
        type: ActionTypes.FILTER_PRODUCT_BY_RATE
    }
}

export const filterbySTOCK = () => {
    return {
        type: ActionTypes.FILTER_PRODUCT_BY_STOCK
    }
}

export const filterbyPRICEDOWN = () => {
    return {
        type: ActionTypes.FILTER_PRODUCT_BY_PRICE_DOWN
    }
}

export const filterbyPRICEUP = () => {
    return {
        type: ActionTypes.FILTER_PRODUCT_BY_PRICE_UP
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}