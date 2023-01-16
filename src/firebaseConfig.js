
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYHvIK_KiiRCnZOSKYJxnZYj_9SlgFJ2A",
  authDomain: "cangrejofeliz-e.firebaseapp.com",
  projectId: "cangrejofeliz-e",
  storageBucket: "cangrejofeliz-e.appspot.com",
  messagingSenderId: "1026845186986",
  appId: "1:1026845186986:web:3b0c288c8cf5c51f5429d3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)