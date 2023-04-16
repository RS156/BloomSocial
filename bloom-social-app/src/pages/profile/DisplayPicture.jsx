import React from "react";
import "./displayPicture.css";
const PF =process.env.REACT_APP_PUBLIC_FOLDER

export default function DisplayPicture({user}) {
  return (
    <div className="displayContainer">
      <div className="displayImagesContainer">
        <img src={user.coverPicture? PF+user.coverPicture: `${PF}assets/no_cover.png`} alt="" className="displayWallpaper" />
        <img
          src={user.profilePicture ? PF+user.profilePicture: `${PF}assets/no_avatar.png`}
          alt=""
          className="displayProfilePhoto"
        />
      </div>
      <div className="displayNameContainer">
        <h4 className="displayName">{user.username}</h4>
        <div className="displayNameDesc">{user.desc}</div>
      </div>
    </div>
  );
}
