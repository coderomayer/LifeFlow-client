// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL0zdExgfj1VOGM-pf7BbTxTc0_mO9LMQ",
  authDomain: "lifeflow-25df5.firebaseapp.com",
  projectId: "lifeflow-25df5",
  storageBucket: "lifeflow-25df5.appspot.com",
  messagingSenderId: "469096577801",
  appId: "1:469096577801:web:e554c33cdff70fececf1d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;