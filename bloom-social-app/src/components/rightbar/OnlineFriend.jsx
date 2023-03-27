import React from "react";
import './onlineFriend.css'

export default function OnlineFriend({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarFriendImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarFriendImage" />
        <span className="rightbarFriendOnlineBadge"></span>
      </div>
      <div className="rightbarFriendName">{user.username}</div>
    </li>
  );
}
