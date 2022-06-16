import RegisterForm from "components/RegisterForm/RegisterForm";
import React from "react";
import { Link } from "wouter";
import "./index.css"

export default function Register () {
    return (
        <div className="register-page">
            <RegisterForm />
            <hr></hr>
            <Link to="/login">
                <button className="btn-register">Iniciar sesión</button>
            </Link>
        </div>
    )
}