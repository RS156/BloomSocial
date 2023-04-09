import React from "react";
import './onlineFriend.css'

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function OnlineFriend({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarFriendImgContainer">
        <img src={user?.profilePicture? PF + user.profilePicture : PF+'assets/no_avatar.png'} alt="" className="rightbarFriendImage" />
        <span className="rightbarFriendOnlineBadge"></span>
      </div>
      <div className="rightbarFriendName">{user.username}</div>
    </li>
  );
}
