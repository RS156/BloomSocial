import React from "react";
import "./loginLayout.css";

export default function LoginLayout(props) {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h2 className="loginLogo">BloomSocial</h2>
          <div className="loginCaption">
            Connect with friends and the world around you on BloomSocial.
          </div>
        </div>
        <div className="loginRight">{props.children}</div>
      </div>
    </div>
  );
}
