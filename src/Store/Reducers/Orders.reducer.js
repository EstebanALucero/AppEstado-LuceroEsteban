import { GET_ORDERS } from "../Actions/orders.action";

const initial_state = {
    list: [],
}

const OrdersReducers = (state = initial_state, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return{...state, list: action.payload}
        default:
            return state;
    }
}

export default OrdersReducers;