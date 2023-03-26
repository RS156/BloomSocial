import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import OnlineFriend from "../onlineFriend/OnlineFriend";

export default function Rightbar() {
  const onlineFriends = Users.filter((u) => u.id % 2 === 0);
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
            {onlineFriends.map((u) => (
              <OnlineFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
