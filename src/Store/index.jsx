import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import CategoryReducer from "./Reducers/Category.reducer"
import ProductReducer from "./Reducers/Products.reducer"
import CartReducer from "./Reducers/Cart.reducer"
import OrdersReducers from "./Reducers/Orders.reducer"
import AuthReducer from "./Reducers/Auth.reducer"
import FiguraReducer from "./Reducers/Figura.reducer"

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrdersReducers,
    auth: AuthReducer,
    figuras: FiguraReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));