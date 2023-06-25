import React, { useContext } from "react";
import "./profileCard.css";
import { ChangeCircle, Logout, SettingsBackupRestore } from "@mui/icons-material";
import { AuthContext } from "../../contexts/AuthContext";
import { LOGOUT } from "../../contexts/AuthActions";
import { Link, useNavigate } from "react-router-dom";
import resetService from "../../services/resetService";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function ProfileCard({ user, profileRef }) {
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  function handleLogoutClick() {   
    dispatch(LOGOUT())
    navigate('/login')
  }

  async function  handleResetClick() {
    // handle reset logic
    const confirmed = window.confirm('Are you sure you reset all the data to default? This will logout the user and reset all the posts and images.');
    if (confirmed) {
      // Perform the action here
      await resetService.resetData()
      dispatch(LOGOUT())
      navigate('/login')
    }
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
        
      

      <div className="profileCardItem" onClick={handleResetClick}>
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
