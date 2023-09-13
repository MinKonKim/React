// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3sS0bQzFX8UoBolkl5Skc7Vm8S2m1eHg",
    authDomain: "react-d-plus-project.firebaseapp.com",
    projectId: "react-d-plus-project",
    storageBucket: "react-d-plus-project.appspot.com",
    messagingSenderId: "606014416458",
    appId: "1:606014416458:web:3207fee45f5aa94c9ba8b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;