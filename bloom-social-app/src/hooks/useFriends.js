import { useEffect, useState } from "react";
import userService from "../services/userService";

const useFriends = (user) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const getUserFriends = async () => {
      if (user?.id) {        
        const userFriends = await userService.getUserFriends(user?.id);
        setFriends(userFriends);
      }
    };
    getUserFriends();
  }, [user]);

  return { friends, setFriends };
};

export default useFriends;
