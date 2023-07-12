import { ADD_FIGURA, LOAD_FIGURAS } from "../Actions/Figura.action"
import Figura from "../../Components/Models/Figura"

const initialState = {
    figuras: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIGURA:
            const newFigura = new Figura(Date.now(), action.payload.title, action.payload.image, action.payload.descripcion)
            return {...state, figuras: state.figuras.concat(newFigura)}
        case LOAD_FIGURAS:
            return {
                ...state,
                figuras: action.figuras.map(item => new Figura(item.id.toString(), item.title, item.image, item.descripcion))
            }
        default:
            return state
    }
}