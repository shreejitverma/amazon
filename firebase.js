import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC78EcluNqk-pNlV5Y5DN7a7WnZ4h8u-RU",
  authDomain: "clone-medium-66d3c.firebaseapp.com",
  projectId: "clone-medium-66d3c",
  storageBucket: "clone-medium-66d3c.appspot.com",
  messagingSenderId: "217345683737",
  appId: "1:217345683737:web:94272ab244bb7b63551588",
  measurementId: "G-QR0H3TZT6X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };