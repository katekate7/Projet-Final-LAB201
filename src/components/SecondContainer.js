import React, { useEffect } from 'react';
import '../css/SecondContainer.css';

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
        <p>La Fédération Française d'Escrime (FFE) gère et <br/> 
        promeut l'escrime en France, organisant des <br/>
        compétitions nationales et soutenant les escrimeurs <br/> 
        dans les arènes internationales. Elle joue un rôle essentiel dans <br/> 
        la formation des athlètes et des entraîneurs, contribuant à la<br/>
        renommée mondiale de l'escrime française.
        </p>
      </div>
    </div>
  );
};

export default SecondContainer;
