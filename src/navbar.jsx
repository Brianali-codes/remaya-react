import React, { useState, useEffect } from 'react';
import Logo from './assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MENU from './assets/menu.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true); // Track visibility of navbar
  const [sidebar, setSidebar] = useState('sidebarOff')
  const checkState = ()=>{
    if (sidebar === 'sidebarOff'){
      setSidebar('sidebarOn')
    }
    else{
      setSidebar('sidebarOff')
    }
  }


  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show the navbar
        setShowNavbar(true);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ensure it doesn't go below 0
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`flex flex-row justify-between p-5 items-center custom-navbar ${showNavbar ? 'show-navbar' : 'hide-navbar'}`}>
        <div className="flex flex-row justify-center items-center gap-10">
          <img src={Logo} alt="Logo" className="w-14" id='logo'/>
          <div className="nav-links flex flex-row gap-3 justify-center items-center">
            <a href="#MAIN1">
              <button className="btn">Home</button>
            </a>
            <a href="#abd">
              <buttton className="btn">About us</buttton>
            </a>
            <a href="#projects">
              <button className="btn">Projects</button>
            </a>
            <a href="#gallery">
              <button className="btn">Gallery</button>
            </a>
            <a href="#mission">
              <button className="btn">Mission And Vision</button>
            <a href="#Blog">
              <button className="btn">Blog</button>
            </a>
            </a>
            <a href="#contact">
              <button className="btn">Contact Us</button>
            </a>
          </div>
          
        </div>
        <div className="flex flex-row justify-center gap-5 items-center socials">
          <div className="flex flex-row gap-3 justify-center items-center">
            <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-black hover:cursor-pointer" />
            <a href="https://m.facebook.com/people/Remaya-ORG/100064591067526/" target='_blank'><FontAwesomeIcon icon={faFacebook} className="text-black text-2xl hover:cursor-pointer" /></a>
            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-black hover:cursor-pointer" />
          </div>

        <Link to="/donate"><button className='support-btn2'>Donate | <FontAwesomeIcon icon={faArrowRight} id='sb2'/></button></Link>
          
        </div>
        <img src={MENU} alt="" className='w-7' id='menu' onClick={checkState}/>
      </div>


      <div className={sidebar}>
          <motion.a
            href="#MAIN1"
            initial={{ opacity: 0, y: 50 }}  // Start from below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, delay: 0 }} // No delay for the first button
            viewport={{ once: true }} // Ensures it triggers only once when in view
            className="your-button-class"
          >
            <button className="btn" onClick={checkState}>Home</button>
          </motion.a>

          <motion.a
            href="#abd"
            initial={{ opacity: 0, y: 50 }}  // Start from below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, delay: 0.2 }} // Small delay before this button
            viewport={{ once: true }} // Ensures it triggers only once when in view
            className="your-button-class"
          >
            <button className="btn" onClick={checkState}>About Us</button>
          </motion.a>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 50 }}  // Start from below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, delay: 0.4 }} // Small delay before this button
            viewport={{ once: true }} // Ensures it triggers only once when in view
            className="your-button-class"
          >
            <button className="btn" onClick={checkState}>Projects</button>
          </motion.a>

          <motion.a
            href="#mission"
            initial={{ opacity: 0, y: 50 }}  // Start from below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, delay: 0.6 }} // Small delay before this button
            viewport={{ once: true }} // Ensures it triggers only once when in view
            className="your-button-class"
          >
            <button className="btn" onClick={checkState}>Mission and Vision</button>
          </motion.a>

          <motion.a
            href="#gallery"
            initial={{ opacity: 0, y: 50 }}  // Start from below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, delay: 0.8 }} // Small delay before this button
            viewport={{ once: true }} // Ensures it triggers only once when in view
            className="your-button-class"
          >
            <button className="btn" onClick={checkState}>Gallery</button>
          </motion.a>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 50 }}  // Start from below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, delay: 1.0 }} // Small delay before this button
            viewport={{ once: true }} // Ensures it triggers only once when in view
            className="your-button-class"
          >
            <button className="btn" onClick={checkState}>Contact Us</button>
          </motion.a>

          <motion.div
            
            initial={{ opacity: 0, y: 50 }}  // Start from below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 1, delay: 1 }} // Small delay before this button
            viewport={{ once: true }} // Ensures it triggers only once when in view
            className="your-button-class"
          >
            <Link to="/donate">
              <button className="support-btn2" onClick={checkState}>
                Donate | <FontAwesomeIcon icon={faArrowRight} id="sb2" />
              </button>
            </Link>
          </motion.div>
        </div>


    </>
  );
}
