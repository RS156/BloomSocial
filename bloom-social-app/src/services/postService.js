import axios from "axios";
const baseUrl = `${process.env.REACT_APP_API_URL}/posts`

 const getTimelinePosts = async (user) => {   
    const response = await axios.get(`${baseUrl}/timeline/${user.id}`)
    return response.data
 }

 const getProfilePosts = async (username) => {   
   const response = await axios.get(`${baseUrl}/profile/${username}`)
   return response.data
}

const postLike =  async (post, userId) =>{
   const response = await axios.put(`${baseUrl}/${post.id}/like`, {userId})
   return response.data
}

const sharePost = async (post) =>{
   const response = await axios.post(`${baseUrl}`, post)
   return response.data
}

 export default {getTimelinePosts, getProfilePosts, postLike, sharePost}