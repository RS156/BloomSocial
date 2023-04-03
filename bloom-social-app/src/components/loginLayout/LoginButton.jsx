import React from "react";
import "./loginButton.css";
import { CircularProgress } from "@mui/material";

export default function LoginButton({ final, text, type, isLoading }) {
  const buttonClass = final ? "loginCreateAccount" : "loginButton";
  return (
    <button className={buttonClass} type={type} disabled={isLoading}>
      {isLoading ? <CircularProgress className="loginLoadingCircle" /> : text}
    </button>
  );
}
