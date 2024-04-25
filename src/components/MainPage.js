import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { Poppins } from 'google-fonts'; // Import the Poppins font
import Display from './Display';

import '../css/MainPage.css';
import '../css/try.css';


function MainPage() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const parent = document.querySelectorAll('.animate-text');
        for (let i = 0; i < parent.length; i++) {
          parent[i].style.width = parent[i].children[0].clientWidth + "px";
        }
      }, []);

      useEffect(() => {
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

      const handleLogout = async () => {
        try {
          await auth.signOut(); // Sign out the user
          // Optionally, you can navigate the user to another page after logout
          // For example, you can redirect the user to the login page
          // window.location.href = '/login'; // Redirect to the login page
        } catch (error) {
          console.error("Error logging out:", error);
        }
      };

  return (
    <div className="main-container">
      <div className="first-conteiner">

      <div className="bg-text-container">
        <div className="animate-text">
          <span>ESCRIME&nbsp;</span>
          <span>ESCRIME&nbsp;</span>
        </div>

          <div className="content-between"></div>

        <div className="animate-text left">
          <span>ESCRIME&nbsp;</span>
          <span>ESCRIME&nbsp;</span>
        </div>
      </div>

      <nav className="menu-nav">

        <Link to="/LoginScreen" className="nav-button">Connexion</Link>
        {loggedIn && <button className="nav-button" onClick={handleLogout}>Logout</button>}
      </nav>
 
          <div className="theme-present" style={{ fontFamily: 'Poppins, sans-serif' }}>
               <p> Plongez au cœur de l’escrime: Ses 3 disciplines 
              <br/>au sein des JO</p>
          </div>
      
      </div>
      <div className="second-conteiner">
        <div className="big-letters">
          <p> F F E </p>
        </div>
      </div>

      {/* <div className="App">

      <h1>ESCRIME</h1>
      <img src="path/to/fencing-competition-image.jpg" alt="Fencing Competition" />
      <p>Plongez au cœur de l'escrime : ses 3 disciplines au sein des JO</p>
      <p>Kempa Escrime</p>

      <div className="container">
        <div className="col">
          <h1>Heading</h1>
          <p>Lobortis primis, ultrices? Earum mollis! Ad consequuntur laboriosam ut possimus, minus expedita, adipisci fermentum, officia maecenas voluptatibus eiusmod, laboriosam maiores aspernatur ad egestas tenetur tempora.</p>
        </div>
      </div>
      
    </div> */}
    
    <Display/>

    </div>
  );
}

export default MainPage;
