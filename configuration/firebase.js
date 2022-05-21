import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const fire = firebase.initializeApp({
    apiKey: "AIzaSyDU1Xgm1UNtBeOFsEZdcYbTg5ulrZGXOnc",
    authDomain: "taxiapp-9cd14.firebaseapp.com",
    projectId: "taxiapp-9cd14",
    storageBucket: "taxiapp-9cd14.appspot.com",
    messagingSenderId: "613508900509",
    appId: "1:613508900509:web:2607b497a367b064761674"
});
export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};