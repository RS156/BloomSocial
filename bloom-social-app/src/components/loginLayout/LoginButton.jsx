import React from 'react'
import './loginButton.css'

export default function LoginButton({final, text}) {
    const buttonClass = final ?  "loginCreateAccount" : "loginButton"
  return (
    <button className={buttonClass}>{text}</button>
  )
}
