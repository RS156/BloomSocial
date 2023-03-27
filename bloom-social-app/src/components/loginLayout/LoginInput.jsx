import React from 'react'
import './loginInput.css'

export default function LoginInput({placeholder}) {
  return (
    <input placeholder={placeholder} className="userNameInput" />
  )
}
