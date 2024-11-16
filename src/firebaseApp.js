import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDoQy_92abFMxn7UeBHYprSrJ7JFFSiMj4",
  authDomain: "d-firebase-ii.firebaseapp.com",
  projectId: "d-firebase-ii",
  storageBucket: "d-firebase-ii.firebasestorage.app",
  messagingSenderId: "157440405607",
  appId: "1:157440405607:web:ccf584219f83bb4c52e4c2"
};

const app = initializeApp(firebaseConfig);
const $auth = getAuth(app)

export { $auth }