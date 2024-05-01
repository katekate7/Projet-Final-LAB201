import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { Poppins } from 'google-fonts'; // Import the Poppins font

import Display from './Display';
import Video from './Video';
import SimpleCarousel from './SimpleCarousel';
import SecondContainer from './SecondContainer';
import OpacityBox from './OpacityBox';

import image1 from '../photo/fleuret.jpg';
import image2 from '../photo/lepee.jpg';
import image3 from '../photo/sabre.jpg';
import firstPhoto from '../photo/fourman.png'; // Import first photo
import secondPhoto from '../photo/flymen.png'; // Import second photo

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

        <Link to="/LoginScreen" className="nav-button">CONNEXION</Link>
        {loggedIn && <button className="nav-button" onClick={handleLogout}>DÉCONNEXION</button>}
      </nav>
 
          <div className="theme-present" style={{ fontFamily: 'Poppins, sans-serif' }}>
               <p> Plongez au cœur de l’escrime: Ses 3 disciplines
              <br/>au sein des JO</p>
          </div>
      
      </div>
<SecondContainer/>

      <div className="third-container">
      </div>

      <div className="four-part-container">
      <div className="column">
        <div className="text-4-part">
          <p>La FFE organise des championnats pour <br/>
          toutes les catégories d'âge et niveaux de<br/>
          compétence. Elle sélectionne et prépare<br/>
          les escrimeurs pour représenter la France<br/>
          dans des compétitions internationales, y <br/>
          compris les Championnats du Monde <br/>
          d'Escrime et les Jeux Olympiques. 
          </p>
        </div>
        <div className="photo">
        <img src={firstPhoto} alt="First Photo" />
        </div>
      </div>
      <div className="column">
        <div className="photo">
        <img src={secondPhoto} alt="Second Photo" />
        </div>
        <div className="text-4-part">
          <p>La France brille de mille feux dans le <br/>
          monde de l'escrime, particulièrement lors<br/>
          des Jeux Olympiques. Avec un palmarès<br/>
          impressionnant de 128 médailles, dont 43<br/>
          en or, l'escrime se positionne comme le<br/>
          sport le plus titré de l'Hexagone aux Jeux,<br/>
          selon la Fédération Française d'escrime.
          </p>
        </div>
      </div>
      </div>

      <div className="fourth-container">   
        <p> L’ESCRIME À TRAVERS LES ÉPOQUES</p>
        <Video/>
      </div>

      <div className="fifth-container"> 
          <div className="distipl-text">
              <p>3 DISCIPLINES </p>
          </div>
              <div className="Caroussel">
              <SimpleCarousel images={images} />
            </div>
      </div>

      <div className="six-conteiner">
        <div className="français">
          <p>NOS FRANÇAIS AUX JO  </p>
        </div>
        <OpacityBox/>
      </div>
    
    <div className="seven-conteiner">
        <Display/>
    </div>
    
    <div className="lastconteiner">
    <div className="bigtext">
          <p>Envie de pratiquer l’escrime ?  </p>
        </div>
        <p className="smalltext" style={{ fontStyle: 'italic' }}>  Trouver facilement un club près de chez vous ! </p>
    </div>

    <div className="lastbutton" style={{marginTop:"-2%"}}>
      <input type="text" style={{width: "90vh", height: "5vh", borderRadius: "30px", marginRight: "20px", backgroundColor: "#D9D9D9", paddingLeft: "15px"}} 
      placeholder="Renseignez votre ville..." />
      <button style={{width: "30vh", height: "5vh", borderRadius: "30px", backgroundColor: "#D9D9D9"}}>TROUVER UN CLUB </button>
    </div>

    <footer>
      <div className="horizontal-column">
        <p>©ClaqClaq</p>
        <p>Conditions générales</p>
        <p>Charte de confidentalié</p>
        <p>Politique des cookies</p>
        <p>Charte de durabilité</p>
      </div>
    </footer>


    </div>
  );
}

export default MainPage;
