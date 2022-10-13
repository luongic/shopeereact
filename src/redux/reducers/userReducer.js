import { ActionTypes } from "../contans/action-types";

const initialState = {
    user:[],
}

export const userReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.LOGIN:
            return {...state, user:payload}
        case ActionTypes.LOGOUT:
            return {...state, user:[]}
    
        default:
            return state
    }
    
}
