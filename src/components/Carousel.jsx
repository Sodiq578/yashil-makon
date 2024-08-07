import React, { useRef, useEffect, useState } from 'react';
import CaruselImg from '../assets/card-img.svg'; // Adjust image paths as needed
import CaruselImg2 from '../assets/card-img2.svg'; // Adjust image paths as needed
import CaruselImg3 from '../assets/card-img.svg'; // Adjust image paths as needed

const slides = [
  {
    image: CaruselImg2,
    title: 'Rocky mountain tops',
    updatedText: 'Updated with 20 new locations',
    description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
    button: 'Read More'
  },
  {
    image: CaruselImg2,
    title: 'Crystal clear lakes',
    updatedText: 'Discover the beauty of crystal clear lakes',
    description: 'Perfect for a serene getaway.',
    button: 'Learn More'
  },
  {
    image: CaruselImg3,
    title: 'Misty forests',
    updatedText: 'Experience the mystery of misty forests',
    description: 'Great for adventure lovers.',
    button: 'Explore'
  },
  // Add more slides as needed
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    const id = setTimeout(() => {
      setIsPaused(false);
    }, 5000); // Resume scrolling after 5 seconds
    setTimeoutId(id);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div className="carousel-container container">
      <div className="carousel" ref={carouselRef}>
        <div className={`carousel-content ${isPaused ? 'paused' : ''}`}>
          {slides.concat(slides).map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <div className="carousel-card">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
                <div className="carousel-text">
                  <h2>{slide.title}</h2>
                  <p className="updated-text">{slide.updatedText}</p>
                  <p className="description">{slide.description}</p>
                  <button className="carousel-button">
                    {slide.button}
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
