import React from 'react'
import LoginButton from '../../components/loginLayout/LoginButton'
import LoginInput from '../../components/loginLayout/LoginInput'
import './loginForm.css'

export default function LoginForm() {
  return (
    <div className="loginForm">
        <LoginInput placeholder='Email' />
        <LoginInput placeholder='Password' />
        <LoginButton text = 'Log In' />
        <div className="loginForgotPassword">Forgot Password?</div>
        <LoginButton text='Create a New Account' final/>
    </div>
  )
}
