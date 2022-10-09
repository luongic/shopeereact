import {combineReducers} from 'redux'
import { productReducer, selectedProductReducer } from './productReducer'
import { categoryReducer, selectedCategoryReducer } from './categoryReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    allCategories: categoryReducer,
    category: selectedCategoryReducer,
})

export default reducers