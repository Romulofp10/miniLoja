
import { initializeApp } from "firebase/app";
import {getFirestore}    from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGzwW_0j1AQtIFi4gqnACGWQFbjGSli7E",
  authDomain: "miniloja-c8076.firebaseapp.com",
  projectId: "miniloja-c8076",
  storageBucket: "miniloja-c8076.appspot.com",
  messagingSenderId: "225351931128",
  appId: "1:225351931128:web:4c12f21a1ab5a6ef87d70d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};