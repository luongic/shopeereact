import { ActionTypes } from "../contans/action-types";

const initialState = {
    category:[]
}

export const categoryReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_CATEGORIES:
            return {...state, category:payload}
    
        default:
            return state
    }
    
}
    

export const selectedCategoryReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_CATEGORIES:
            return {...state, payload}
        case ActionTypes.REMOVE_SELECTED_CATEGORIES:
            state = {}
            return {}
        default:
            return state
    }
}