// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSPLBrjv2hj_eBiFPObitYNtKWx0ev4BQ",
  authDomain: "medical-camp-main.firebaseapp.com",
  projectId: "medical-camp-main",
  storageBucket: "medical-camp-main.firebasestorage.app",
  messagingSenderId: "695569405193",
  appId: "1:695569405193:web:b4b11667fed31b6e5cafd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);