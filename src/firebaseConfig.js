import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAfqhUCuraCCywdBmB0r5IY2Li5kXcMGFY",
    authDomain: "fir-4574c.firebaseapp.com",
    projectId: "fir-4574c",
    storageBucket: "fir-4574c.appspot.com",
    messagingSenderId: "1053071283939",
    appId: "1:1053071283939:web:bd168a374db95d0a8557d6",
    measurementId: "G-7MYFYC3Z9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth };


