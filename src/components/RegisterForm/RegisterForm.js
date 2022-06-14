import React from "react";
import { useFormik } from "formik";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className="individual-form">
    <h3>Registro</h3>
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
