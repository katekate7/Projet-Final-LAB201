import React from 'react';
import ReactDOM from 'react-dom';
import {db} from './firebaseConfig'; // Import Firebase
import 'firebase/database'; // Import Firebase Realtime Database module
import Login from './components/LoginScreen'; // Import the Login component

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   databaseURL: "YOUR_DATABASE_URL",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
//   db.initializeApp(firebaseConfig);


const App = () => {
  return (
    <div>
      <Login /> {/* Use the Login component */}
    </div>
  );
};

export default App; // Export App as the default export

ReactDOM.render(<App />, document.getElementById('root'));
