import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDC1uu15VzElIkSb51NCRF2BTjJBB9EXHc",
  authDomain: "cloth-shop-db-cde8b.firebaseapp.com",
  projectId: "cloth-shop-db-cde8b",
  storageBucket: "cloth-shop-db-cde8b.appspot.com",
  messagingSenderId: "445406283015",
  appId: "1:445406283015:web:d8bfd525d9aca24194f1a2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



