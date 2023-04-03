import React from 'react'
import './closeFriend.css'
const PF =process.env.REACT_APP_PUBLIC_FOLDER

export default function CloseFriend({user}) {
  return (
    <li className="friendListItem">
    <img
      src={`${PF}/${user.profilePicture}`}
      alt=""
      className="frientListItemImg"
    />
    <span className="frientListItemName">{user.username}</span>
  </li> 
  )
}
