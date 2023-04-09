import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import DisplayPicture from "./DisplayPicture";
import './profile.css'
import { useParams } from "react-router-dom";
import userService from "../../services/userService";
import { useEffect, useState } from "react";

export default function Profile() {
  const username = useParams().username 
  const [user, setUser] =useState({})
  useEffect(()=>{
    const getAllUser = async ()=>{
      const data = await userService.getByUsername(username)          
      setUser(data)
    }
    getAllUser()   
  },[username])
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <DisplayPicture user={user}/>
          <div className="profileRightContainer">
            <Feed username={username}/>
            <Rightbar profile user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
