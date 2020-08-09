import { initializeApp } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDjYnTzwmoNbS7Vs4QEtd9ltomnoA6c5WQ",
    authDomain: "grounded-vista-270022.firebaseapp.com",
    databaseURL: "https://grounded-vista-270022.firebaseio.com",
    projectId: "grounded-vista-270022",
    storageBucket: "grounded-vista-270022.appspot.com",
    messagingSenderId: "105653797035",
    appId: "1:105653797035:web:12e3ea2783c6cc3addf7ee",
    measurementId: "G-9V0BYEWM0P"
  };

  
  const firebaseapp=initializeApp(firebaseConfig)
  const db =firebaseapp.firestore();

  export default db;
