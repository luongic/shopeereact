import { ActionTypes } from "../contans/action-types"

export const login = (user) => {
    return {
        type: ActionTypes.LOGIN,
        payload: user,
    }
}

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT ,
    }
}
