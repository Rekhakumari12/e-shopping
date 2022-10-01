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
export const firestore = firebase.firestore()

/* ------------------ 1. store data in firebase starts------------------ */

//userAuth - object we got from firebase when user sign in
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  //.doc will return a DocumentReference where we can perform .get(), .set(), .update(), .delete() operations
  let userRef = firestore.doc(`users/${userAuth.uid}`)

  // userRef.get() will return snapshots its basicaly user's details
  let snapShots = await userRef.get()

  //snapShots.exists checks if user exists or not 
  if (!snapShots.exists) { //if does not exist then set/create a new user
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error while creating user', error.message)
    }
  }
  return userRef
}

/* ------------------ store data in firebase ends------------------ */

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase