import { createStore, combineReducers } from "redux"

import CategoryReducer from "./Reducers/Category.reducer"
import ProductReducer from "./Reducers/Products.reducer"

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
})

export default createStore(RootReducer);