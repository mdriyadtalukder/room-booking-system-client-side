// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXpF8okGJqiJlId3-fDcgryQ_LrPRKuAk",
  authDomain: "room-booking-44214.firebaseapp.com",
  projectId: "room-booking-44214",
  storageBucket: "room-booking-44214.appspot.com",
  messagingSenderId: "325687509042",
  appId: "1:325687509042:web:b44d416b0e4a1f34eafc2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;