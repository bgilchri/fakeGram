  // Import the functions you need from the SDKs you need

  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  import firebase from 'firebase/compat/app'
  import 'firebase/compat/storage';
  import 'firebase/compat/firestore';

  const firebaseConfig = {

    apiKey: "AIzaSyDQJx6AhEl3yvvxBF8Df0amKcbEWoNCWXk",

    authDomain: "fakegram-project.firebaseapp.com",

    projectId: "fakegram-project",

    storageBucket: "fakegram-project.appspot.com",

    messagingSenderId: "963740240956",

    appId: "1:963740240956:web:4a80eba3951d7778d6c739"

  };


  // Initialize Firebase

  // const app = initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
