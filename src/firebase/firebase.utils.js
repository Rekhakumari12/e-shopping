import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNkfwvCQrXOtoH7j6PV_gqCglQUOEevbA",
  authDomain: "shop-db-7990b.firebaseapp.com",
  projectId: "shop-db-7990b",
  storageBucket: "shop-db-7990b.appspot.com",
  messagingSenderId: "73769839072",
  appId: "1:73769839072:web:40681abec7441357e1a385",
  measurementId: "G-S9WZHV6QHZ"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase