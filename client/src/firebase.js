// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFNcmFBvGkOCth0L3nk0MJu5l1xvtiP1A",
  authDomain: "blog-app-4ed2d.firebaseapp.com",
  projectId: "blog-app-4ed2d",
  storageBucket: "blog-app-4ed2d.appspot.com",
  messagingSenderId: "1021738928799",
  appId: "1:1021738928799:web:7817fecd65beb4386070aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);