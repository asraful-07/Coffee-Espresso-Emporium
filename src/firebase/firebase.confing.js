// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8pbo-5jakcxF_7E-mgixYrODBjMTW0XY",
  authDomain: "coffee-master-65a4b.firebaseapp.com",
  projectId: "coffee-master-65a4b",
  storageBucket: "coffee-master-65a4b.firebasestorage.app",
  messagingSenderId: "466450478851",
  appId: "1:466450478851:web:2c105466bbdc197b75db36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
