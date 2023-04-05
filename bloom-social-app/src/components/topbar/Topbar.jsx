import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Topbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="topbarHeadline">Bloom Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="topBarSearchBar">
          <SearchIcon className="topbarSearchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="topBarSearchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIcon">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <MessageIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIcon">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user?.profilePicture
                ? user.profilePicture
                : `${PF}/assets/no_avatar.png`
            }
            alt=""
            className="topbarImage"
          />
        </Link>
      </div>
    </div>
  );
}
