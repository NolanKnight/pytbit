// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6lcXvUd3ENwk0g9OXE6AuMSTAIwPYEYQ",
    authDomain: "pytbit-c8937.firebaseapp.com",
    databaseURL: "https://pytbit-c8937-default-rtdb.firebaseio.com",
    projectId: "pytbit-c8937",
    storageBucket: "pytbit-c8937.appspot.com",
    messagingSenderId: "73575206726",
    appId: "1:73575206726:web:f183a2f9043f6396b51f47",
    measurementId: "G-PPNZX6TLJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);