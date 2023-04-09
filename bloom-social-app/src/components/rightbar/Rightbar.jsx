import React, { useContext, useEffect, useState } from "react";
import "./rightbar.css";
import OnlineFriend from "./OnlineFriend";
import Birthday from "./Birthday";
import UserInfo from "./UserInfo";
import UserFriend from "./UserFriend";
import useFriends from "../../hooks/useFriends";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import userService from "../../services/userService";
import { FOLLOW, UNFOLLOW } from "../../contexts/AuthActions";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Rightbar({ profile, user }) {
  const HomeRightBar = () => {
    const { user } = useContext(AuthContext);
    const { friends } = useFriends(user);
    return (
      <>
        <Birthday />
        <img src={`${PF}assets/ad.jpg`} alt="" className="rightBarAdImg" />
        <div className="rightbarFriendContainer">
          <div className="rightbarFriendHeader">Online Friends</div>
          <ul className="rightbarFriendList">
            {friends.map((u) => (
              <Link key={u.id} to={`/profile/${u.username}`}>
                <OnlineFriend user={u} />{" "}
              </Link>
            ))}
          </ul>
        </div>
      </>
    );
  };
  const ProfileRightBar = () => {
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const isCurrentUser = currentUser.id === user.id;
    const [isFollowing,setIsFollowing] = useState(currentUser.followings.includes(user.id));
    const { friends } = useFriends(user);
    useEffect(()=>{
      setIsFollowing(currentUser.followings.includes(user.id))
    },[currentUser, user])
    const handleFollow = async ()=>{
      if(isFollowing){
        await userService.unfollowUser(user, currentUser)
        dispatch(UNFOLLOW(user.id))
      }
      else{
        await userService.followUser(user, currentUser)
        dispatch(FOLLOW(user.id))
      }
      setIsFollowing(!isFollowing)
    }
   
    return (
      <>
        {!isCurrentUser && (
          <button className="rightBarFollowButton" onClick={handleFollow}>
            {!isFollowing ? (
              <>
                Follow <Add className="followIcon" />
              </>
            ) : (
              <>
                Unfollow <Remove className="followIcon" />
              </>
            )}
          </button>
        )}
        <UserInfo user={user} />
        <div className="userFollowing">
          <h4 className="userFollowingHeader">User Friends</h4>
          <div className="rightbarFollowing">
            {friends.map((u) => (
              <Link key={u.id} to={`/profile/${u.username}`}>
                <UserFriend user={u} />
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
