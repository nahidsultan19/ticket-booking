// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB50lBKr3_CQ2Tt87xd3Dh3DQNndGxYCUM",
    authDomain: "tickets-69d37.firebaseapp.com",
    projectId: "tickets-69d37",
    storageBucket: "tickets-69d37.appspot.com",
    messagingSenderId: "94085242622",
    appId: "1:94085242622:web:529dc1dcda1b6b22a88faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;