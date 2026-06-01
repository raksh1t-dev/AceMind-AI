
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examiq-338.firebaseapp.com",
  projectId: "examiq-338",
  storageBucket: "examiq-338.firebasestorage.app",
  messagingSenderId: "992981460668",
  appId: "1:992981460668:web:be3c06522158037e4392b9"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
console.log(import.meta.env);
console.log("API KEY =", import.meta.env.VITE_FIREBASE_APIKEY);