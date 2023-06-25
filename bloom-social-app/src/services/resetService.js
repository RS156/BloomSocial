import axios from "axios";
const baseUrl = `${process.env.REACT_APP_API_URL}/testing/reset`

 const resetData = async () => {   
    const response = await axios.post(`${baseUrl}`)
    return response.data
 }

 export default {resetData}