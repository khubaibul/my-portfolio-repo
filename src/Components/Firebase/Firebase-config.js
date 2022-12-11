// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS2s8NUyn6HyCWZOLT26ZLU2Kjqtofwts",
    authDomain: "khubaibul-islam-portfolio.firebaseapp.com",
    projectId: "khubaibul-islam-portfolio",
    storageBucket: "khubaibul-islam-portfolio.appspot.com",
    messagingSenderId: "217616008654",
    appId: "1:217616008654:web:50d6dc07ceb8444e2d979f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;