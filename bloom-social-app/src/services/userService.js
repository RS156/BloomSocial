import axios from "axios";
const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}?id=${id}`);
  return response.data;
};

const getByUsername = async (username) => {
   const response = await axios.get(`${baseUrl}?username=${username}`);
   return response.data;
 };

export default { getById, getByUsername };
