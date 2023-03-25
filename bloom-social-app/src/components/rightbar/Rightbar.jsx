import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <div className="rightbarBirthdayContainer">
          <img src="assets/gift.png" alt="" className="rightbarBirthayImg" />
          <div className="rightbarBrthdayText">
            <b>Barbara Everett</b> and <b>2 other friends</b> have birthday
            today
          </div>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightBarAdImg" />
        <div className="rightbarFriendContainer">
          <div className="rightbarFriendHeader">Online Friends</div>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img src="assets/person/3.jpg" alt="" className="rightbarFriendImage" />
                <span className="rightbarFriendOnlineBadge"></span>
              </div>
              <div className="rightbarFriendname">Brenda Woods</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img src="assets/person/3.jpg" alt="" className="rightbarFriendImage" />
                <span className="rightbarFriendOnlineBadge"></span>
              </div>
              <div className="rightbarFriendname">Brenda Woods</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img src="assets/person/3.jpg" alt="" className="rightbarFriendImage" />
                <span className="rightbarFriendOnlineBadge"></span>
              </div>
              <div className="rightbarFriendname">Brenda Woods</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img src="assets/person/3.jpg" alt="" className="rightbarFriendImage" />
                <span className="rightbarFriendOnlineBadge"></span>
              </div>
              <div className="rightbarFriendname">Brenda Woods</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img src="assets/person/3.jpg" alt="" className="rightbarFriendImage" />
                <span className="rightbarFriendOnlineBadge"></span>
              </div>
              <div className="rightbarFriendname">Brenda Woods</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
