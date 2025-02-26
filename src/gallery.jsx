import React, { useState, useEffect } from 'react';
import image1 from './assets/image1.webp';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.webp';
import image4 from './assets/image4.webp';
import image5 from './assets/image5.webp';
import { motion } from 'framer-motion';
import TrueFocus from './trueFocus';



const CarouselGallery = () => {
  const images = [
    { src: image1, caption: "Join us in making a difference—your generosity brings hope to those who need it most." },
    { src: image2, caption: "Together, we can create lasting change. Your support matters." },
    { src: image3, caption: "Every contribution counts. Help us create a brighter future for those in need." },
    { src: image4, caption: "Your kindness can change lives. Support our mission and be part of the movement." },
    { src: image5, caption: "Hope starts with you. Together, we can help build a better tomorrow." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '100%',
        overflow: 'hidden',
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
      }}
      id='gallery'
    >
                  <div className='flex flex-col justify-center items-center p-5'>
                  <p className='desc font-bold text-3xl'>
                    <p className="desc text-center text-md ">
                            <TrueFocus 
                            sentence="The Gallery."
                            manualMode={false}
                            blurAmount={2}
                            borderColor="rgb(67, 67, 253)"
                            animationDuration={1}
                            pauseBetweenAnimations={1}
                            />
                        </p>
                        <div className='flex flex-row'>
                                <motion.div
                                    initial={{ width:"10%"}}
                                    whileInView={{ width:"100%", }}
                                    transition={{ duration: 1 }} // Adjust the duration as needed
                                    viewport={{ once: true }} // Ensures it triggers only once when in view
                                    class="horizontal-line"
                                    >
                    
                                </motion.div>
                            <div class="circle"></div>
                        </div>
                        <p className='text-xs'>View Some of the pictures.</p>
                    </p>
                  </div>
                         
        
      <p className='desc text-center mb-6'>
        Here are some of the pictures that were taken during <span className='text-blue-400'> Remaya's </span>first Visit to Ndiini Primary school.
      </p>

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
                width: '60%',
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

      {/* Dots for navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              margin: '5px',
              backgroundColor: currentIndex === index ? '#007BFF' : '#ccc',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselGallery;
