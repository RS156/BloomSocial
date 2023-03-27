import React from "react";
import LoginLayout from "../../components/loginLayout/LoginLayout";
import "./login.css";
import LoginButton from '../../components/loginLayout/LoginButton'
import LoginInput from '../../components/loginLayout/LoginInput'

export default function Login() {
  return (
    <LoginLayout>
      <div className="loginForm">
        <LoginInput placeholder="Email" />
        <LoginInput placeholder="Password" />
        <LoginButton text="Log In" />
        <div className="loginForgotPassword">Forgot Password?</div>
        <LoginButton text="Create a New Account" final />
      </div>
    </LoginLayout>
  );
}
