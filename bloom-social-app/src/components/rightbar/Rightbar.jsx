import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import OnlineFriend from "./OnlineFriend";
import Birthday from "./Birthday";
import UserInfo from "./UserInfo";
import UserFriend from "./UserFriend";

export default function Rightbar({profile}) {
  const onlineFriends = Users.filter((u) => u.id % 2 === 0);
  const followingFriends =  Users.filter( u => u.id !==1)
  const HomeRightBar = () => (
    <>
      <Birthday />
      <img src="/assets/ad.jpg" alt="" className="rightBarAdImg" />
      <div className="rightbarFriendContainer">
        <div className="rightbarFriendHeader">Online Friends</div>
        <ul className="rightbarFriendList">
          {onlineFriends.map((u) => (
            <OnlineFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </>
  );
  const ProfileRightBar = () => {
    return (
    <>
    <UserInfo />
    <div className="userFollowing">
      <h4 className="userFollowingHeader">User Friends     
      </h4>     
<div className="rightbarFollowing">
    {followingFriends.map( u =>(
      <UserFriend user={u} />
    ))}
</div>
    </div>  
    </>);
  };
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar /> }
      </div>
    </div>
  );
}
