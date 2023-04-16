import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileCard from "./ProfileCard";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const [showCard, setShowCard] = useState(false);
  const profileIconRef = useRef(null);
  const profileCardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileIconRef.current &&
        !profileIconRef.current.contains(event.target) &&
        profileCardRef.current &&
        !profileCardRef.current.contains(event.target)
      ) {
        setShowCard(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [profileIconRef, profileCardRef]);

  function handleIconClick() {
    setShowCard(!showCard);
  }
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

        <img
          src={
            user?.profilePicture
              ? PF + user.profilePicture
              : `${PF}assets/no_avatar.png`
          }
          alt=""
          className="topbarImage"
          onClick={handleIconClick}
          ref={profileIconRef}
        />
      </div>
      {showCard && <ProfileCard user={user} profileRef={profileCardRef} />}
    </div>
  );
}
