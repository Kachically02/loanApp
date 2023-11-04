import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyB5i-UwMp6KUaFCOobXDghw0g3WD7EKF2E",
//     authDomain: "drugstoc-app.firebaseapp.com",
//     projectId: "drugstoc-app",
//     storageBucket: "drugstoc-app.appspot.com",
//     messagingSenderId: "353391754987",
//     appId: "1:353391754987:web:f91d9e48e41108eef748ae",
//     measurementId: "G-LBKD8RGJJX",
//     databaseURL: "https://drugstoc-app-default-rtdb.firebaseio.com/"
//   };



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2qI25EffOngC5VFYMP6eywxUZ7VnOY4k",
  authDomain: "loan-app-cba2e.firebaseapp.com",
  projectId: "loan-app-cba2e",
  storageBucket: "loan-app-cba2e.appspot.com",
  messagingSenderId: "67476698012",
  appId: "1:67476698012:web:69a023f3f4c1376e550e59"
};

// Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

  const database = getFirestore(app);

  const firebase = {
      app,
      database
  }

  export default firebase;