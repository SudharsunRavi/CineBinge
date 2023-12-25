// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdk2XdTI--Vpf0zQJK8SxHBkjH3eKNCkI",
  authDomain: "netflixgpt-a2004.firebaseapp.com",
  projectId: "netflixgpt-a2004",
  storageBucket: "netflixgpt-a2004.appspot.com",
  messagingSenderId: "871452589538",
  appId: "1:871452589538:web:67b747a03febd4f3854dbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();