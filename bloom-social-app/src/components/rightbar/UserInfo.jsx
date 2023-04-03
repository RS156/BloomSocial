import React from 'react'
import './userInfo.css'

export default function UserInfo({user}) {
  return (
    <div className="userInfo">
      <h4 className="userInforHeader">User Information</h4>
      <ul className="userInfoList">
        <li className="userInfoItem">
          <span className="userInfoKey">City:</span>
          <span className="userInfoValue">{user.City}</span>
        </li>
        <li className="userInfoItem">
          <span className="userInfoKey">From:</span>
          <span className="userInfoValue">{user.from}</span>
        </li>
        <li className="userInfoItem">
          <span className="userInfoKey">Relationship:</span>
          <span className="userInfoValue">{user.relationship}</span>
        </li>
      </ul>
    </div>
  )
}
