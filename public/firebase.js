// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqnPL7k9qcfEq7cVZ-ZJ5DrV1_C2bnD8g",
  authDomain: "inventory-managment-c2f59.firebaseapp.com",
  projectId: "inventory-managment-c2f59",
  storageBucket: "inventory-managment-c2f59.appspot.com",
  messagingSenderId: "642708288877",
  appId: "1:642708288877:web:ab250c7887c1a978711664",
  measurementId: "G-8D0KSZ2D9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}