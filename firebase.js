import * as firebase from "firebase"
import "@firebase/firestore"
import{API_KEY} from "@env"



var firebaseConfig = {
    apiKey:API_KEY ,
    authDomain: "followup-ca4f2.firebaseapp.com",
    databaseURL: "https://followup-ca4f2.firebaseio.com",
    projectId: "followup-ca4f2",
    storageBucket: "followup-ca4f2.appspot.com",
    messagingSenderId: "723196642127",
    appId: "1:723196642127:web:a88b8e721d70cdee6b3b3a",
    measurementId: "G-9N1N30GJ7W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
  firebase.auth()

  export default firebase