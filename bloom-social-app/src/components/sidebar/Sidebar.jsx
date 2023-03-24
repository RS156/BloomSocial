import {
  Bookmark,
  Group,
  HelpOutline,
  Message,
  PlayCircle,
  RssFeed,
  School,
  WorkOutline,
  Event,
} from "@mui/icons-material";
import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Message className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="lineSeperator" />
        <ul className="friendList">
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />            
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />            
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />            
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />
            <span className="frientListItemName">Jane Doe</span>
          </li>
          <li className="friendListItem">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="frientListItemImg"
            />            
            <span className="frientListItemName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
