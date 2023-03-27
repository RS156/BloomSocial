import React from 'react'
import './userInfo.css'

export default function UserInfo() {
  return (
    <div className="userInfo">
      <h4 className="userInforHeader">User Information</h4>
      <ul className="userInfoList">
        <li className="userInfoItem">
          <span className="userInfoKey">City:</span>
          <span className="userInfoValue">New York</span>
        </li>
        <li className="userInfoItem">
          <span className="userInfoKey">From:</span>
          <span className="userInfoValue">Madrid</span>
        </li>
        <li className="userInfoItem">
          <span className="userInfoKey">Relationship:</span>
          <span className="userInfoValue">Single</span>
        </li>
      </ul>
    </div>
  )
}
