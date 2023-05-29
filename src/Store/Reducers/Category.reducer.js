import { CATEGORIES } from "../../Data/Categories"
import { SELECTED_CATEGORY } from "../Actions/category.action";

const initialState = {
    categories: CATEGORIES,
    selected: null,
};

const CategoryReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SELECTED_CATEGORY:
            const IndexCategory = state.categories.findIndex(
                cat => cat.id === action.categoryId
            )
            if( IndexCategory === -1 ) return state
            return {...state, selected: state.categories[IndexCategory]}
        default:
            return state
    }
}

export default CategoryReducer