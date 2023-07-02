
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../Navigation/Navigation.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest('.NavMenuContainer')) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close the menu when location changes
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: '-20px' },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: '-20px' },
    visible: { opacity: 1, y: 0 },
  };

  const signRegisterVariants = {
    hidden: { opacity: 0, y: '20px' },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="Header" id="Header">
        <motion.div
          className="TopNavContainer"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ type: 'tween', duration: 0.8 }}
        >
          <motion.div
            className="LogoBox"
            variants={logoVariants}
            transition={{ type: 'tween', duration: 0.8, delay: 0.3 }}
          >
            <img src="../img/logo/logo.png" alt="logo" />
          </motion.div>
          <motion.nav
            className="NavMenuContainer"
            variants={menuVariants}
            transition={{ type: 'tween', duration: 0.8, delay: 0.5 }}
          >
            <div className="hamburger" onClick={handleToggleMenu}>
              <div className="bar"></div>
            </div>
            <ul className={`NavMenuUl ${isOpen ? 'active' : ''}`}>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/" onClick={handleItemClick}>
                  Home
                </Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/about" onClick={handleItemClick}>
                  About
                </Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/vehiclemodels" onClick={handleItemClick}>
                  Vehicle Models
                </Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/testimonialPage" onClick={handleItemClick}>
                  Testimonials
                </Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/ourteam" onClick={handleItemClick}>
                  Our Team
                </Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/contact" onClick={handleItemClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>

          <motion.div
            className="SignRegister"
            variants={signRegisterVariants}
            transition={{ type: 'tween', duration: 0.8, delay: 0.7 }}
          >
            <p>Sign In</p>
            <button style={{ fontSize: 'inherit' }}>Register</button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
