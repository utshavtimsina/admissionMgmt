import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBUXYY3tSb80CQsmclNc-O7BoTPeK1g2eU",
  authDomain: "admissionmanagementsyste-42e38.firebaseapp.com",
  databaseURL: "https://admissionmanagementsyste-42e38.firebaseio.com",
  projectId: "admissionmanagementsyste-42e38",
  storageBucket: "admissionmanagementsyste-42e38.appspot.com",
  messagingSenderId: "1074444660728",
  appId: "1:1074444660728:web:cbada35f1810ea3765f00d",
  measurementId: "G-2G2QTNEXXF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
