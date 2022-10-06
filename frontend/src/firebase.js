// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaKsys-5Ohhf70mPAXdvB2sV3lhN0aZmI",
  authDomain: "spcachat.firebaseapp.com",
  projectId: "spcachat",
  storageBucket: "spcachat.appspot.com",
  messagingSenderId: "942897819648",
  appId: "1:942897819648:web:f0042ee57fdaba8f9ea8e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
