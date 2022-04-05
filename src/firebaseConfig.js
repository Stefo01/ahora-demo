import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB44jo9V-3c3I_s7lP_D5Hn5h2-uWkLvAY",
    authDomain: "smart-menu-demo.firebaseapp.com",
    projectId: "smart-menu-demo",
    storageBucket: "smart-menu-demo.appspot.com",
    messagingSenderId: "413659766987",
    appId: "1:413659766987:web:0b2ca12ecaf509c5283b4e",
    measurementId: "G-4S92XQ05KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);