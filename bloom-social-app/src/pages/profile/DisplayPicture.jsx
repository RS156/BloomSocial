import React from "react";
import "./displayPicture.css";

export default function DisplayPicture() {
  return (
    <div className="displayContainer">
      <div className="displayImagesContainer">
        <img src="./assets/post/10.jpg" alt="" className="displayWallpaper" />
        <img
          src="./assets/person/1.jpg"
          alt=""
          className="displayProfilePhoto"
        />
      </div>
      <div className="displayNameContainer">
        <h4 className="displayName">Tyrell Atkinson</h4>
        <div className="displayNameDesc">Hello my friends!</div>
      </div>
    </div>
  );
}
