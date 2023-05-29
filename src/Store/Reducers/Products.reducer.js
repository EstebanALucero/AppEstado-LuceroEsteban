import { PRODUCTS } from "../../Data/Products"
import { SELECTED_PRODUC, FILTERED_PRODUC } from "../Actions/products.action";

const initialState = {
    products: PRODUCTS,
    filteredProduct: [],
    selected: null,
};

const ProductReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SELECTED_PRODUC:
            return {...state, selected: state.products.find(
                product => product.id === action.productId
            ),};
        case FILTERED_PRODUC:
            return{...state, filteredProduct: state.products.filter(
                product => product.category === action.categoryId
            ),};
        default:
            return state;
    };

};

export default ProductReducer