import { ActionTypes } from "../contans/action-types";

const initialState = {
    item:[],
}

export const cartReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_CART:
            return {...state, cart:payload}

        case ActionTypes.ADD_TO_CART:
            const item = state.item.find(
                product => product.id === payload.id,
            );

            if (item){
                return {
                    ...state,
                    item: state.item.map(item => item.id === payload.id
                      ? {
                        ...item,
                        quantity: item.quantity + 1,
                      }
                      : item
                    )
                  };
            }
            
            return {...state, item: state.item.concat([payload])}
            
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state, 
                item:  state.item.filter((item, index) => index !==payload)
            }

        default:
            return state
    }
    
}

