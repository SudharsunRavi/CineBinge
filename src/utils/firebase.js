// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXrdN-nQ_rxZtHt6oLEwfpL7BvGXVa2mQ",
  authDomain: "netflixgpt-v2.firebaseapp.com",
  projectId: "netflixgpt-v2",
  storageBucket: "netflixgpt-v2.appspot.com",
  messagingSenderId: "694203186790",
  appId: "1:694203186790:web:4467d04e37b446d893b7a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();