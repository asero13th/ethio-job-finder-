import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDyNBlQDFNB2mj5qM0g7Nm_rCVXnJoBpNA",
  authDomain: "ethio-job-finder.firebaseapp.com",
  projectId: "ethio-job-finder",
  storageBucket: "ethio-job-finder.appspot.com",
  messagingSenderId: "763869233737",
  appId: "1:763869233737:web:17904e4a6a5ce26607b598",
  measurementId: "G-DC66PLX9TV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle  = () =>{
  signInWithPopup(auth, provider).then((result) => {
      console.log(result)
  }).catch((error) =>{
    console.log(error)
  })
}