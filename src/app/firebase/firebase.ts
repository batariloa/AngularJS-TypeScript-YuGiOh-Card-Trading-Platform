// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACA3acQ4BuPojzimIUOCHKfDnSxQW-1r4",
  authDomain: "yugioh-20b18.firebaseapp.com",
  projectId: "yugioh-20b18",
  storageBucket: "yugioh-20b18.appspot.com",
  messagingSenderId: "280036925399",
  appId: "1:280036925399:web:3889f03a72768af876b592",
  measurementId: "G-TFLN3404NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

