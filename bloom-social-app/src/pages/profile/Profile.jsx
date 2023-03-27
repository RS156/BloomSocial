import React from "react";
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import DisplayPicture from "./DisplayPicture";
import './profile.css'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <DisplayPicture />
          <div className="profileRightContainer">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
