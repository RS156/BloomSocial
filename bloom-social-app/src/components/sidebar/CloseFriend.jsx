import React from 'react'
import './closeFriend.css'
const PF =process.env.REACT_APP_PUBLIC_FOLDER

export default function CloseFriend({user}) {
  return (
    <li className="friendListItem">
    <img
      src={user.profilePicture?`${PF}${user.profilePicture}`:`${PF}assets/no_avatar.png`}
      alt=""
      className="frientListItemImg"
    />
    <span className="frientListItemName">{user.username}</span>
  </li> 
  )
}
