import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useFormik } from "formik";

export default function LoginForm() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <div className="login-form">
      <h3>Inicia sesion</h3>
      <form onSubmit={formik.handleSubmit} className="login-form">
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
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
}
