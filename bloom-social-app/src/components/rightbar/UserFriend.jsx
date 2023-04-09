import React from 'react'
import './userFriend.css'
const PF =process.env.REACT_APP_PUBLIC_FOLDER

export default function UserFriend({user}) {
    return (
      <div className="userFollowingItem">
        <img src={user?.profilePicture? `${PF}/${user.profilePicture}` : PF+'assets/no_avatar.png'} alt="" className="userFollowingImg" />
        <div className="userFollowingName">{user.username}</div>
      </div>
    )
}
