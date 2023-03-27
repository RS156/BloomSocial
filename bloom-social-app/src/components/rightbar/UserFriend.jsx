import React from 'react'
import './userFriend.css'

export default function UserFriend({user}) {
  console.log(user);
    return (
      <div className="userFollowingItem">
        <img src={user.profilePicture} alt="" className="userFollowingImg" />
        <div className="userFollowingName">{user.username}</div>
      </div>
    )
}
