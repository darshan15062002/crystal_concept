import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCAlcjp10mTNcsrE3IcHqsgNxN8lDwthj8",
    authDomain: "crystal-concept-d97c8.firebaseapp.com",
    projectId: "crystal-concept-d97c8",
    storageBucket: "crystal-concept-d97c8.appspot.com",
    messagingSenderId: "242205805174",
    appId: "1:242205805174:web:c46cba98cede6743132d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth };


