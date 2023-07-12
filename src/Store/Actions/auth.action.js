import { URL_AUTH_SINGUP } from "../../Constants/Database";

export const SINUP = "SIGNUP"

export const singUp = (email, password) => {
    console.log(email, password)
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SINGUP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                }),
            })
            const data = await response.json();
            console.log(data)
            dispatch({
                type: SINUP,
                token: data.idToken,
                userId: data.localId,
            });
        } catch (error) {
            console.log(error)
        }
    }
}