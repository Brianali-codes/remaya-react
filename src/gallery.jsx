import React, { useState, useEffect } from 'react';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';

const CarouselGallery = () => {
  const images = [
    { src: image1, caption: "Join us in making a difference—your generosity brings hope to those who need it most." },
    { src: image2, caption: "Together, we can create lasting change. Your support matters." },
    { src: image3, caption: "Every contribution counts. Help us create a brighter future for those in need." },
    { src: image4, caption: "Your kindness can change lives. Support our mission and be part of the movement." },
    { src: image5, caption: "Hope starts with you. Together, we can help build a better tomorrow." },
    { src: image6, caption: "Your time can make a difference. Join our community of volunteers today." },
    { src: image7, caption: "You have the power to make a difference. Stand with us and be a hero for those in need." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '100%',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        
      }}
      id='gallery'
    >
      <p className='desc text-center font-bold text-xl'>Gallery</p>
      <p className='desc font-bold text-center mb-6'>View some of the pictures taken during our first Ndiini visit.</p>
      
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              minWidth: '100%',
              maxWidth: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={image.src}
              alt={`Gallery Item ${index + 1}`}
              style={{
                margin: '20px',
                width: '70%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
            <p
              style={{
                textAlign: 'center',
                fontSize: '16px',
                color: '#333',
                padding: '10px',
                borderRadius: '8px',
                marginTop: '10px',
              }}
              className='desc'
            >
              {image.caption}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={prevImage}
        aria-label="Previous Image"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '18px',
        }}
      >
        &#10094;
      </button>

      <button
        onClick={nextImage}
        aria-label="Next Image"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '18px',
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default CarouselGallery;
