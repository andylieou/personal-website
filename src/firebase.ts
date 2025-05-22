// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZj22MS75uPTLJx91HVPEd563gUvp-D1s",
  authDomain: "shoppinglist-18f87.firebaseapp.com",
  databaseURL: "https://shoppinglist-18f87-default-rtdb.firebaseio.com/",
  projectId: "shoppinglist-18f87",
  storageBucket: "shoppinglist-18f87.firebasestorage.app",
  messagingSenderId: "1017532984839",
  appId: "1:1017532984839:web:1b18782fd88c1abd5dc4a2",
  measurementId: "G-XDF4V4Z4B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);