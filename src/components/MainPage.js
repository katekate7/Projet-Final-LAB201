import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { Poppins } from 'google-fonts'; // Import the Poppins font

import Display from './Display';
import Video from './Video';
import SimpleCarousel from './SimpleCarousel';
import image1 from '../photo/photo1.jpg';
import image2 from '../photo/photo2.jpg';
import image3 from '../photo/photo3.jpg';

import '../css/MainPage.css';
import '../css/try.css';
import OpacityBox from './OpacityBox';


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

   const images = [image1, image2, image3]; // Add more images if needed

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

      <div className="three-fighters-photo">
        </div>

        <div className="text">
          <p>La Fédération Française d'Escrime (FFE) gère et <br/> 
          promeut l'escrime en France, organisant des <br/>
          compétitions nationales et soutenant les escrimeurs <br/> 
          dans les arènes internationales. Elle joue un rôle essentiel dans <br/> 
          la formation des athlètes et des entraîneurs, contribuant à la<br/>
           renommée mondiale de l'escrime française.
         </p>
        </div>
      </div>

      <div className="third-container">
      </div>

      <div className="fourth-container">   
        <p> LE SPORT LE PLUS MEDAILLÉ DES JEUX <br/> OLYMPIQUES </p>
        <Video/>
      </div>

      <div className="fifth-container"> 
          <div className="distipl-text">
              <p>3 disciplines </p>
          </div>
              <div className="Caroussel">
              <SimpleCarousel images={images} />
            </div>
      </div>

      <div className="six-conteiner">
        <div className="français">
          <p>Nos français aux JO </p>
        </div>
        <OpacityBox/>
      </div>
    
    <div className="seven-conteiner">
        <Display/>
    </div>
    

    </div>
  );
}

export default MainPage;
