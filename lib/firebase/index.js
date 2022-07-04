import firebase from 'firebase/app';
import "firebase/firestore";

import firebaseConfig from './config';
import 'firebase/analytics';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
export {firestore};

export const { analytics } = firebase;
export default firebase;
