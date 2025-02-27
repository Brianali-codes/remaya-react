import React, { useState, useEffect } from 'react';
import Logo from './assets/logo.svg';
import MENU from './assets/menu.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Nav2() {
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
      <div className={`flex flex-row justify-between p-5 items-center custom-navbar ${showNavbar ? 'show-navbar' : 'hide-navbar'}`} id='NAV2'>
        <div className="flex flex-row justify-center items-center gap-10">
          <img src={Logo} alt="Logo" className="w-14" id='logo'/>
          
        </div>
        <div>

        </div>
        <Link to="/">
              <button className="btn2">Go back</button>
        </Link>
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

        </div>


    </>
  );
}
