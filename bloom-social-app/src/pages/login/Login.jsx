import React, { useContext, useRef } from "react";
import LoginLayout from "../../components/loginLayout/LoginLayout";
import "./login.css";
import LoginButton from "../../components/loginLayout/LoginButton";
import authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    await authService.login(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };
  return (
    <LoginLayout>
      <div className="loginContainer">
        <form className="loginForm" onSubmit={handleLogin}>
          <input
            className="userNameInput"
            placeholder="Email"
            type="email"
            required
            ref={email}
            defaultValue='tyrell@test.com'
          />
          <input
            className="userNameInput"
            placeholder="Password"
            type="password"
            required
            ref={password}
            defaultValue='Password1'
          />
          <LoginButton text="Log In" type="submit" isLoading={isFetching} />
        </form>
        <div className="loginForgotPassword">Forgot Password?</div>        
        <LoginButton text="Create a New Account" final isLoading={isFetching} to='/signup'/>
        
        
      </div>
    </LoginLayout>
  );
}
