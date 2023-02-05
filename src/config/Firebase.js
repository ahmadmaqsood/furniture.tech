// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";


// const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  //   authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  //   projectId: process.env.REACT_APP_FIREBASE_projectId,
  //   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  //   appId: process.env.REACT_APP_FIREBASE_appId,
  //   measurementId: process.env.REACT_APP_FIREBASE_measurementId
  // };
  const firebaseConfig = {
    apiKey:"AIzaSyBNJVe2ndqh1b9gPiRwiPqkY1LH--lEDRg",
    authDomain: "furniture-site-6254.firebaseapp.com",
    projectId: "furniture-site-6254",
    storageBucket: "furniture-site-6254.appspot.com",
    messagingSenderId: "400882322116",
    appId: "1:400882322116:web:7f4def3e8f2d20d5749791",
    measurementId: "G-9WYNK91WE6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage =  getStorage(app);

  const provider = new GoogleAuthProvider();                    
  const fbProvider = new FacebookAuthProvider();                    
  
  export {analytics,auth,firestore,storage,provider,fbProvider}
  