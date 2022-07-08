// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvn2v4v75tDQ3y-Bv1k6T7i8sw9hKekpc",
    authDomain: "project-5d761.firebaseapp.com",
    projectId: "project-5d761",
    storageBucket: "project-5d761.appspot.com",
    messagingSenderId: "183123406841",
    appId: "1:183123406841:web:da0499625e02436a519728",
    measurementId: "G-6WRQN3GH4J"
  };

// firebase.initializeApp(config);
// export default firebase;

// //Initialize Firebase
// const firebaseApp = initializeApp({ projectId: "project-5d761"}); 
// // console.log(firebase)
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// export { db, auth };

const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
// export { db, auth };
// export const auth = getAuth(app);


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };