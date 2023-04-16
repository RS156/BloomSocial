import React, { useContext } from "react";
import "./profileCard.css";
import { ChangeCircle, Logout, SettingsBackupRestore } from "@mui/icons-material";
import { AuthContext } from "../../contexts/AuthContext";
import { LOGOUT } from "../../contexts/AuthActions";
import { Link, useNavigate } from "react-router-dom";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function ProfileCard({ user, profileRef }) {
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  function handleLogoutClick() {   
    dispatch(LOGOUT())
    navigate('/login')
  }

  function handleSettingsClick() {
    // handle settings logic
  }

  return (
    <div className="profileCardContainer" ref={profileRef}>
      <Link to={`/profile/${user.username}`}>
      <div className="profileCardHeader">
          <img
            src={
              user?.profilePicture
                ? PF + user.profilePicture
                : `${PF}assets/no_avatar.png`
            }
            alt=""
            className="profileCardHeaderIcon"
          />
          <span className="profileCardHeaderName">{user?.username}</span>
        </div>
      </Link>
        
      

      <div className="profileCardItem">
        <SettingsBackupRestore className="profileCardItemIcon"/>
        <span>Reset to Default</span>
      </div>
      <div className="profileCardItem" onClick={handleLogoutClick}>
        <Logout className="profileCardItemIcon"/>
        <span>Log Out</span>
      </div>
    </div>
  );
}
