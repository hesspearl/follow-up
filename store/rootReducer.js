import{createStore ,combineReducers } from "redux"
import firebase from "../firebase"
  import { createFirestoreInstance, firestoreReducer , }
   from 'redux-firestore' 
   import {firebaseReducer } from "react-redux-firebase"

   const rrfConfig = {
    userProfile: 'users',
    enableClaims:true,
     useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

  const rootReducers= combineReducers({
    format:Format,
    filter:filter,
    modal:modalState,
    fireStore:firestoreReducer,
    firebase:firebaseReducer,
     })

     export const store = createStore(rootReducers)

     export const rrfProps = {
        firebase,
        config: rrfConfig,
       
        createFirestoreInstance // <- needed if using firestore
      }