// Your web app's Firebase configuration
import firebase from 'firebase';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyCt4PeXickXI3VvO7nSkE9XhK60FkY6xBE",
  authDomain: "myproject-firebase-11362.firebaseapp.com",
  databaseURL: "https://myproject-firebase-11362.firebaseio.com",
  projectId: "myproject-firebase-11362",
  storageBucket: "myproject-firebase-11362.appspot.com",
  messagingSenderId: "985711415616",
  appId: "1:985711415616:web:1cbfd7d8018025cd516aa5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase