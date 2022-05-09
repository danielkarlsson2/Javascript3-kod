import axios from "axios";
import actiontypes from "../actiontypes";

export const registerUser = (user) => {
    return dispatch => {
        dispatch(loading())
        axios.post('http://localhost:8080/register', user)
        .then(res = data)
    }
}