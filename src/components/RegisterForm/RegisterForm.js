import React, { useContext } from "react";
import { useFormik } from "formik";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "context/UserContext";
import { useLocation } from "wouter";

export default function RegisterForm() {

  const { setUID } = useContext(UserContext);
  const [, setLocation] = useLocation()

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) alert(`¡Perfil creado con exito!`)
          setUID(user.uid)
          setLocation("/")
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className="register-form">
      <form onSubmit={formik.handleSubmit} className="login-form">
        <input
          type="email"
          onChange={formik.handleChange}
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={formik.handleChange}
          name="password"
          placeholder="Contraseña"
        />
        <button type="submit">Registrarce</button>
      </form>
    </div>
  );
}
