import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD-wa-LAtSgj-4cAG5GJaY2xb57MFOVhxw",
    authDomain: "hotel-36130.firebaseapp.com",
    projectId: "hotel-36130",
    storageBucket: "hotel-36130.appspot.com",
    messagingSenderId: "996168944362",
    appId: "1:996168944362:web:35b4ccfe88a84bbf186593",
    measurementId: "G-EZ0JF3QEWV"
  };

  const app=initializeApp(firebaseConfig);
  export const auth =getAuth(app);