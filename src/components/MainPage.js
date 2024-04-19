import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/MainPage.css';
import '../css/try.css';


function MainPage() {

    useEffect(() => {
        const parent = document.querySelectorAll('.animate-text');
        for (let i = 0; i < parent.length; i++) {
          parent[i].style.width = parent[i].children[0].clientWidth + "px";
        }
      }, []);

  return (
    <div className="main-container">
      <nav className="menu-nav">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/services" className="nav-button">Services</Link>
        <Link to="/LoginScreen" className="nav-button">Connexion</Link>
      </nav>
      <div className="main-content">
            <div>
            <h1>Main Page</h1>
            </div>
        {/* Основний вміст сторінки */}
      </div>

      <div className="App">
      <div className="bg-text-container">
        <div className="animate-text">
          <span>Driven Better&nbsp;</span>
          <span>Driven Better&nbsp;</span>
        </div>
        <div className="animate-text left">
          <span>Driven Better&nbsp;</span>
          <span>Driven Better&nbsp;</span>
        </div>
      </div>

      <div className="container">
        <div className="col">
          <h1>Heading</h1>
          <p>Lobortis primis, ultrices? Earum mollis! Ad consequuntur laboriosam ut possimus, minus expedita, adipisci fermentum, officia maecenas voluptatibus eiusmod, laboriosam maiores aspernatur ad egestas tenetur tempora.</p>
        </div>

        
      </div>
    </div>

    </div>
  );
}

export default MainPage;
