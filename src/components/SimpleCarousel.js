import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css'; // Import your CSS file

const SimpleCarousel = ({ images }) => {
  return (
    <div className="Caroussel"> {/* Update class name here */}
      <Carousel autoPlay interval={1850} infiniteLoop showArrows showStatus={false} showIndicators={false} swipeable emulateTouch>
        {images.map((image, index) => (
          <div key={index} className="Gallery">
          <img src={image} alt={`slide-${index}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;

