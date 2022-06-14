import React from "react";
import RegisterForm from "components/RegisterForm/RegisterForm";
import LoginForm from "components/LoginForm/LoginForm";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="open-text"></div> 
      <LoginForm />
    </div>
  );
}
