import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBckzAXoC4no76MEU4DnzQQQvUl1vU-R00",
    authDomain: "react-crud-62994.firebaseapp.com",
    projectId: "react-crud-62994",
    storageBucket: "react-crud-62994.appspot.com",
    messagingSenderId: "782945696829",
    appId: "1:782945696829:web:0a3897b58d50a272427e54",
    measurementId: "G-3YZN7RVYQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);