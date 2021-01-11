import {createStore, combineReducers, applyMiddleware} from 'redux';
import firebase from '../firebase';
import {createFirestoreInstance, firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import filter from './reducers/filter';
import modalState from './reducers/modalsState';
import Format from './reducers/format';
import theme from "./reducers/themes"

const rrfConfig = {
  userProfile: 'users',
  enableClaims: true,
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

const rootReducers = combineReducers({
  format: Format,
  filter: filter,
  theme:theme,
  modal: modalState,
  fireStore: firestoreReducer,
  firebase: firebaseReducer,
});

export const store = createStore(rootReducers);

export const rrfProps = {
  firebase,
  config: rrfConfig,

  createFirestoreInstance, // <- needed if using firestore
};
