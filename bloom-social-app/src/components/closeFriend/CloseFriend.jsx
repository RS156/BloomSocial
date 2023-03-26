import React from 'react'
import './closeFriend.css'


export default function CloseFriend({user}) {
  return (
    <li className="friendListItem">
    <img
      src={user.profilePicture}
      alt=""
      className="frientListItemImg"
    />
    <span className="frientListItemName">{user.username}</span>
  </li> 
  )
}
