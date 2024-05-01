import React, { useState, useEffect } from 'react';
import { getDatabase, set, ref, onValue } from "firebase/database";
import { auth } from "../firebaseConfig";
import { saveTextToFirebase } from '../firebaseConfig';
import '../css/MainPage.css';

const Display = () => {
  const [savedData, setSavedData] = useState(""); // State variable to store fetched data from Firebase
  const [editMode, setEditMode] = useState(false); // State variable to toggle edit mode
  const [editText, setEditText] = useState(""); // State variable to store edited text
  const [loggedIn, setLoggedIn] = useState(false); // State variable to track user login status

    useEffect(() => {
        // Function to fetch text data from Firebase when component mounts
        const fetchTextDataFromFirebase = () => {
          const database = getDatabase();
          const databaseRef = ref(database, 'Information'); // Reference to the 'Information' node in Firebase
    
          // Listen for changes to the 'textNode' in the database
          onValue(databaseRef, (snapshot) => {
            const data = snapshot.val(); // Get the data from the snapshot
            if (data) {
              setSavedData(data); // Update the component state with the retrieved data
            }
          });
        };
    
        // Call the fetchTextDataFromFirebase function
        fetchTextDataFromFirebase();
    
    }, []); 


    useEffect(() => {
      // Function to check user authentication status when component mounts
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            // User is logged in
            setLoggedIn(true);
          } else {
            // No user is logged in
            setLoggedIn(false);
          }
        });
    
        // Clean up the subscription
        return () => unsubscribe();
      }, []);


          // Function to handle entering edit mode
    const handleEdit = () => {
      setEditMode(true); // Enter edit mode
      setEditText(savedData); // Set the edited text to the current saved data
    };


    // Function to handle saving edited text to Firebase
    const handleSave = () => {
        saveTextToFirebase(editText)
        console.log("Saving edited text:", editText);
        setEditMode(false); // Exit edit mode
        window.location.reload();
    };


    // Function to handle cancelling edit mode
    const handleCancel = () => {
        setEditMode(false); // Exit edit mode without saving
    };


    // Function to handle changes in edited text
    const handleChange = (event) => {
        setEditText(event.target.value); // Update the edited text as it changes
    };

    const handleClear = () => {
      // Clear the text saved in the Realtime Firebase Database
      const database = getDatabase();
      const databaseRef = ref(database, 'Information');
      set(databaseRef, ""); // Set the value of the database node to an empty string
      
      // Refresh the page
      window.location.reload();
    };

    return (
        <div className="saved-data">
            {editMode ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <div>
                    <div className="Form">
                      <h2 className="Competition">Lieu des compétitions d'escrime suivantes:</h2>
                      <p>{savedData}</p>
                      {loggedIn && <button className="Edit" onClick={handleEdit}>Edit</button>}
                      {loggedIn && <button className="Edit" onClick={handleClear}>Clear</button>}
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default Display
