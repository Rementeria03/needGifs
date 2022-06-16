import React, { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useFormik } from "formik";
import { Link, useLocation } from "wouter";
import { UserContext } from "context/UserContext";

export default function LoginForm() {

  const { setUID } = useContext(UserContext);
  const [, setLocation] = useLocation()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { user } = userCredential
          setUID(user.uid)
          user && setLocation("/")
        })
        .catch((error) => {
          const errCode = error.code;
          const errMessage = error.message;
          console.log(`error code ${errCode}: ${errMessage}`)
        });
    },
  });

  return (
    <div className="login-form">
      <form onSubmit={formik.handleSubmit}>
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          placeholder="Email"
        />
        <input
          name="password"
          onChange={formik.handleChange}
          placeholder="Contraseña"
          type="password"
        />
        <button className="login-btn" type="submit">Iniciar sesión</button>
        <Link to="/">¿Olvidaste tu contraseña?</Link>
      </form>
    </div>
  );
}
