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

const getUserFriends = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}/friends`);
  return response.data;
};

const followUser = async (user, currentUser) =>{
  const response = await axios.put(`${baseUrl}/${user.id}/follow`, {userId:currentUser.id})
  return response.data;
}

const unfollowUser = async (user, currentUser) =>{
  const response = await axios.put(`${baseUrl}/${user.id}/unfollow`, {userId:currentUser.id})
  return response.data;
}

export default { getById, getByUsername, getUserFriends, followUser, unfollowUser };
