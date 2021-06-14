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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log("Snapshot: ", snapShot)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;

}


export default firebase;



