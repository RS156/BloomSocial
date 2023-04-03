import axios from "axios";
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "../contexts/AuthActions";
const baseUrl = `${process.env.REACT_APP_API_URL}/auth`

const login = async (userCredentials, dispatch) =>{
    dispatch(LOGIN_START())
    try{
        const res = await axios.post(`${baseUrl}/login`, userCredentials)
    dispatch(LOGIN_SUCCESS(res.data))
    }
    catch(err)
    {
        dispatch(LOGIN_FAILURE(err))
    }
    
}

export default {login}