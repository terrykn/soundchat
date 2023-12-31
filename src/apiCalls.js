import axios from "axios";
import { Navigate } from "react-router-dom";

const api = axios.create({ baseURL: "https://soundchat-api.onrender.com" })

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try{
        const res = await api.post("/api/auth/login", userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch(err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};