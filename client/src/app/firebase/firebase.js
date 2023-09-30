// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxvm5mV9ZLw9xbZcd5msEyjnE7eq7MGcs",
  authDomain: "govern-it-c650f.firebaseapp.com",
  projectId: "govern-it-c650f",
  storageBucket: "govern-it-c650f.appspot.com",
  messagingSenderId: "765954047148",
  appId: "1:765954047148:web:bc987ddd5d457d6d56f309",
  measurementId: "G-QGR8L0BRQX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp);

export default firebaseApp;
export {firestore, database};
