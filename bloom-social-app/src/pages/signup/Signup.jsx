import { useRef } from "react";
import LoginLayout from "../../components/loginLayout/LoginLayout";
import "./signup.css";
import LoginButton from '../../components/loginLayout/LoginButton'
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
//import LoginInput from '../../components/loginLayout/LoginInput'

export default function Signup() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwodAgain = useRef()
  const history = useNavigate()

  const handleSignup =async (e)=>{
    e.preventDefault()
    if(password.current.value !== passwodAgain.current.value){
      password.current.setCustomValidity('password do not match')
    }
    else{
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      }
      await authService.register(user)
      history('/login')
    }
  }

  return (
    <LoginLayout>
      <div className="signupContainer">
        <form onSubmit={handleSignup} className="signupForm">
        <input className="userNameInput" required type='text' placeholder="Username" ref={username}/>
        <input className="userNameInput" required type='email' placeholder="Email" ref={email}/>
        <input className="userNameInput" required type='password' placeholder="Password" ref={password}/>
        <input className="userNameInput" required type='password' placeholder="Password Again" ref={passwodAgain}/>
        <LoginButton text="Sign Up" type='submit'/>   
        </form>             
        <LoginButton text="Log into Account" final to='/login'/>
              
      </div>
    </LoginLayout>
  );
}
