import * as FileSystem from "expo-file-system"
import { fetchAddress, insertAddress } from "../../db"

export const ADD_FIGURA = "ADD_FIGURA"
export const LOAD_FIGURAS = "LOAD_FIGURAS"

export const addFigura = (title, image, descripcion) => {

    return async dispatch =>{
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path,
            })
            const result = await insertAddress(
                title, image, descripcion
            )
            console.log(result)
        } catch (error) {
            console.log(error.message)
            throw error
        }
        dispatch({ type: ADD_FIGURA, payload: {title, image: Path, descripcion} })
    }
}

export const loadFiguras = () => {
    return async (dispatch) => {
        try {
            const result = await fetchAddress()
            console.log(result)
            dispatch({ type: LOAD_FIGURAS, figuras: result.rows._array})
        } catch (error) {
            throw error;
        }
    }
}