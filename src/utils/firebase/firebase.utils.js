import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc}
   from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv7Ho9GKb_q-6U_wpkUZwjagBcc5hy2Cs",
  authDomain: "crown-clothing-db-ea628.firebaseapp.com",
  projectId: "crown-clothing-db-ea628",
  storageBucket: "crown-clothing-db-ea628.appspot.com",
  messagingSenderId: "416419632656",
  appId: "1:416419632656:web:353a8c38cb434c71b9dc95"
};

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account"
})
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createDocumentUserFromAuth = async (userAuth) => {
  const userDocRef = doc (db, 'users' , userAuth.uid )
  console.log(userDocRef)

  const userSnapshot = await getDoc (userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef
};

