import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// My web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCMx0woc3m1C6SC-V-noNd0Ti5tXAYo6X4",
  authDomain: "needgifs-8d435.firebaseapp.com",
  projectId: "needgifs-8d435",
  storageBucket: "needgifs-8d435.appspot.com",
  messagingSenderId: "348923857312",
  appId: "1:348923857312:web:60ddd4988baecbb4f23cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
