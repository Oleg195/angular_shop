// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5_NZeI8r037NjzH7LOlZQwH6-dZb_TrM",
  authDomain: "test-project-7d75b.firebaseapp.com",
  databaseURL: "https://test-project-7d75b-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "test-project-7d75b",
  storageBucket: "test-project-7d75b.appspot.com",
  messagingSenderId: "805812316644",
  appId: "1:805812316644:web:828cd1888d0103c8237ff1",
  measurementId: "G-5B6623MS9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);