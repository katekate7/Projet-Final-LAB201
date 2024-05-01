import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/MainPage.css'; // Import your CSS file

const SimpleCarousel = ({ images }) => {
  return (
    <div className="Caroussel"> {/* Container for the carousel */}
      <Carousel autoPlay interval={3000} infiniteLoop showArrows showStatus={false} showIndicators={false} swipeable emulateTouch>
       {/* Map through the images array to render each image */}
        {images.map((image, index) => (
          <div key={index} className="Gallery"> {/* Container for each image */}
          {/* Image element */}
          <img src={image} alt={`slide-${index}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;

