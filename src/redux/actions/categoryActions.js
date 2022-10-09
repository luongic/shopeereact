import { ActionTypes } from "../contans/action-types"

export const setCategories = (categories) => {
    return {
        type: ActionTypes.SET_CATEGORIES,
        payload: categories,
    }
}

export const selectedCategory = (category) => {
    return {
        type: ActionTypes.SELECTED_CATEGORIES ,
        payload: category,
    }
}

export const removeSelectedCategory = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_CATEGORIES,
    }
}