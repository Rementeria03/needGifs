import React from "react";
import LoginForm from "components/LoginForm/LoginForm";
import "./Login.css";
import { Link } from "wouter";

export default function Login() {

  return (
    <div className="login-page">
      <LoginForm />
      <hr></hr>
      <Link to="/register">
        <button>Crear cuenta nueva</button>
      </Link>
      <Link to="/">
        <button>Seguir sin registrarce</button>
      </Link>
    </div>
  );
}
