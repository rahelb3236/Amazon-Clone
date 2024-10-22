
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuOWGkYyXKj8WnzjqKVPizPtabK-kJMgc",
  authDomain: "clone-34362.firebaseapp.com",
  projectId: "clone-34362",
  storageBucket: "clone-34362.appspot.com",
  messagingSenderId: "730752476785",
  appId: "1:730752476785:web:3427f5765a6620ef1a5dd0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth= getAuth(app);
export const db = app.firestore();


