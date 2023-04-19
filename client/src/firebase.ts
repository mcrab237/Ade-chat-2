// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5P0rRB4ZDYqjwtLDbUb6Bp4qVGwyr4bk",
  authDomain: "adechat-fe7be.firebaseapp.com",
  projectId: "adechat-fe7be",
  storageBucket: "adechat-fe7be.appspot.com",
  messagingSenderId: "697462244012",
  appId: "1:697462244012:web:8ca87b32174c6123279509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function Sigin(email: string,password: string){
    return signInWithEmailAndPassword(auth, email, password)
}

export function Signup(email: string,password: string){
    return createUserWithEmailAndPassword(auth, email,password)
}

