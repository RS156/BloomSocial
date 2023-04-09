import React from "react";
import "./birthday.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
export default function Birthday() {
  return (
    <div className="rightbarBirthdayContainer">
      <img src={`${PF}assets/gift.png`} alt="" className="rightbarBirthayImg" />
      <div className="rightbarBrthdayText">
        <b>Barbara Everett</b> and <b>2 other friends</b> have birthday today
      </div>
    </div>
  );
}
