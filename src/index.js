// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkoBDYntsxs_GOfT5Hw4HflA4Hr-3mhOg",
  authDomain: "first-project-firebase-cd5be.firebaseapp.com",
  projectId: "first-project-firebase-cd5be",
  storageBucket: "first-project-firebase-cd5be.firebasestorage.app",
  messagingSenderId: "534031217579",
  appId: "1:534031217579:web:13d506df3b8a7b04cdd8ee",
  measurementId: "G-3F66RB5KXP"
};
const auth = getAuth(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(firebaseConfig);

const messaging = getMessaging();
// Add the public key generated from the console here.
getToken(messaging, {vapidKey: "BJkkQko2fzqq8Eib5s-6G4E37IaGAvOBifpP-EO6HlwsbtbgR2I1l0Y2Smv-OnVzLZe6I90if1YPdoCCLzwOUuI"});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);