import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkKoUE1QUrjqh7N5P1s8b3uq4ZYgPHpdw",
  authDomain: "projet-final-lab201.firebaseapp.com",
  databaseURL: "https://projet-final-lab201-default-rtdb.firebaseio.com",
  projectId: "projet-final-lab201",
  storageBucket: "projet-final-lab201.appspot.com",
  messagingSenderId: "73379607362",
  appId: "1:73379607362:web:bdebb7876aaa30e4360edb",
  measurementId: "G-67X9FNSX5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, FIREBASE_AUTH, db, analytics, FIREBASE_AUTH as auth };
