import React from "react";
import "./loginButton.css";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginButton({ final, text, type, isLoading, to }) {
  const buttonClass = final ? "loginCreateAccount" : "loginButton";
  const Button = () =>(
    <button className={buttonClass} type={type} disabled={isLoading}>
      {isLoading ? <CircularProgress className="loginLoadingCircle" /> : text}
    </button>
  )
  return (<>
  {
    to 
    ? <Link to={to} className='loginNavLink'><Button /></Link>
    : <Button />
  }  
  </>)
    
}
