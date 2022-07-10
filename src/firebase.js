import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA71oQDzGPwsPkJVAYlitin9nupXSwoV74",
  authDomain: "proyect-final-2ada5.firebaseapp.com",
  projectId: "proyect-final-2ada5",
  storageBucket: "proyect-final-2ada5.appspot.com",
  messagingSenderId: "492749586903",
  appId: "1:492749586903:web:f335ae331b365af088cb92"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const currentUserPromise = () =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        resolve(user);
      },
      (e) => reject(e)
    );
  });

export { auth, currentUserPromise, db };