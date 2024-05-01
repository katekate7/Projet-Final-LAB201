import React, { useEffect } from 'react';
import '../css/MainPage.css';

const SecondContainer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document.querySelector('.second-container');
      const offset = element.offsetTop;
      const height = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollPosition - offset + windowHeight) / height;

      // Apply animation based on scroll position
      if (scrollPercentage >= 0 && scrollPercentage <= 0.3) {
        // Three letters appear
        const opacity = scrollPercentage / 0.3;
        element.querySelector('.big-letters').style.opacity = opacity;
      } else if (scrollPercentage > 0.4 && scrollPercentage <= 0.7) {
        // Photo of fighters appear with a delay
        const opacity = (scrollPercentage - 0.4) / 0.3;
        element.querySelector('.three-fighters-photo').style.opacity = opacity;
      } else if (scrollPercentage > 0.7 && scrollPercentage <= 1) {
        // Text appear
        const opacity = (scrollPercentage - 0.7) / 0.3;
        element.querySelector('.text').style.opacity = opacity;
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="second-container">
      <div className="big-letters">
        <p> F F E </p>
      </div>
      <div className="three-fighters-photo"></div>
      <div className="text">
        <p>La Fédération Française d'Escrime (FFE) <br/> 
        gère et promeut l'escrime en France, <br/>
        organisant des compétitions nationales et<br/> 
        soutenant les escrimeurs dans les arènes<br/> 
        internationales. Elle joue un rôle essentiel<br/>
        dans la formation des athlètes et des <br/>
        entraîneurs, contribuant à la renommée <br/>
        mondiale de l'escrime française.
        </p>
      </div>
    </div>
  );
};

export default SecondContainer;
