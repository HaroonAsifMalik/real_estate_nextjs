import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBuMbs_7_y0qmpin6GUBWzxhuQPkJtJNUY",
  authDomain: "realestateproject-8c609.firebaseapp.com",
  projectId: "realestateproject-8c609",
  storageBucket: "realestateproject-8c609.appspot.com",
  messagingSenderId: "893946839843",
  appId: "1:893946839843:web:560d79e55dfee6c2604296"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);