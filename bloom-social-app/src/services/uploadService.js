import axios from "axios";
const baseUrl = `${process.env.REACT_APP_API_URL}/upload`;

const uploadFile = async (file) => {
    const formdata = new FormData()
    const filename = Date.now() + file.name
    formdata.append('name', filename)
    formdata.append('file', file)
    
  const response = await axios.post(`${baseUrl}/image/post`,formdata, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

export default {uploadFile}