// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIPisuKAq4QLhx-9LWrMmT0Vdvxotk2N0",
  authDomain: "pantry-4ed37.firebaseapp.com",
  projectId: "pantry-4ed37",
  storageBucket: "pantry-4ed37.appspot.com",
  messagingSenderId: "586212040755",
  appId: "1:586212040755:web:b4bd8d6bda8818b1a74346",
  measurementId: "G-T04V7C99P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);