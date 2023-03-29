import React from "react";
import LoginLayout from "../../components/loginLayout/LoginLayout";
import "./signup.css";
import LoginButton from '../../components/loginLayout/LoginButton'
import LoginInput from '../../components/loginLayout/LoginInput'

export default function Signup() {
  return (
    <LoginLayout>
      <div className="signupForm">
        <LoginInput placeholder="Username" />
        <LoginInput placeholder="Email" />
        <LoginInput placeholder="Password" />
        <LoginInput placeholder="Password Again" />
        <LoginButton text="Sign Up" />        
        <LoginButton text="Log into Account" final />
      </div>
    </LoginLayout>
  );
}
