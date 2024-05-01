import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, set, ref } from "firebase/database";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Function to save text data to Firebase Realtime Database
export const saveTextToFirebase = (textData) => {
  // Get a reference to the database
  const database = getDatabase(app);

  // Reference to the root of the database
  const databaseRef = ref(database, 'Information');

  // Set the text data to a specific node in the database
  set(databaseRef, textData)
    .then(() => {
      console.log("Text data saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving text data: ", error);
    });
};

export { app, FIREBASE_AUTH, db, analytics, FIREBASE_AUTH as auth };
