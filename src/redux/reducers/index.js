import {combineReducers} from 'redux'
import { productReducer, selectedProductReducer } from './productReducer'
import { categoryReducer, selectedCategoryReducer } from './categoryReducer'
import { userReducer } from './userReducer'
import { cartReducer } from './cartReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    allCategories: categoryReducer,
    category: selectedCategoryReducer,
    user: userReducer,
    cart: cartReducer,
})

export default reducers