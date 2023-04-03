import React from 'react'
import './userFriend.css'
const PF =process.env.REACT_APP_PUBLIC_FOLDER

export default function UserFriend({user}) {
  console.log(user);
    return (
      <div className="userFollowingItem">
        <img src={`${PF}/${user.profilePicture}`} alt="" className="userFollowingImg" />
        <div className="userFollowingName">{user.username}</div>
      </div>
    )
}
