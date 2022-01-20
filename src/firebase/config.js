import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBALyiXdwhoQtbxuirlqxEYBNxvyKerKyw",
  authDomain: "jtsboard-9ff9b.firebaseapp.com",
  projectId: "jtsboard-9ff9b",
  storageBucket: "jtsboard-9ff9b.appspot.com",
  messagingSenderId: "382314200850",
  appId: "1:382314200850:web:43b8ef15cda0e194353dcb",
  measurementId: "G-6W23TE5NS3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
