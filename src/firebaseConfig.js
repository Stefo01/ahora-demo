import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAQYC3QxMNaxUyK18TY1-8VbuR78j_o_U4",
    authDomain: "ahora-milano.firebaseapp.com",
    projectId: "ahora-milano",
    storageBucket: "ahora-milano.appspot.com",
    messagingSenderId: "61731098849",
    appId: "1:61731098849:web:c35a386ea1be900e2f27a0",
    measurementId: "G-VZCF6NHJL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);