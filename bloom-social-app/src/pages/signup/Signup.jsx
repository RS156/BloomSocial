import React from "react";
import LoginLayout from "../../components/loginLayout/LoginLayout";
import "./signup.css";
import LoginButton from '../../components/loginLayout/LoginButton'
//import LoginInput from '../../components/loginLayout/LoginInput'

export default function Signup() {
  return (
    <LoginLayout>
      <div className="signupForm">
        <input className="userNameInput" placeholder="Username" />
        <input className="userNameInput" placeholder="Email" />
        <input className="userNameInput" placeholder="Password" />
        <input className="userNameInput" placeholder="Password Again" />
        <LoginButton text="Sign Up" />        
        <LoginButton text="Log into Account" final />
      </div>
    </LoginLayout>
  );
}
