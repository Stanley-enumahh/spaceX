// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDee6N2RHOJ-HVzrKfdX-5PQxgPT-uwH08",
  authDomain: "login-auth-bab00.firebaseapp.com",
  projectId: "login-auth-bab00",
  storageBucket: "login-auth-bab00.firebasestorage.app",
  messagingSenderId: "695883463047",
  appId: "1:695883463047:web:5ea27fec69dc89415ebb22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
