import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Navigation/Navigation.css";

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
    if (event.target.closest(".NavMenuContainer")) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close the menu when location changes
  }, [location]);

  return (
    <>
      <section className="Header" id="Header">
        <div className="TopNavContainer">
          <div className="LogoBox">
            <img src="../img/logo/logo.png" alt="logo" />
          </div>
          <nav className="NavMenuContainer">
            <div className="hamburger" onClick={handleToggleMenu}>
              <div className="bar"></div>
            </div>
            <ul className={`NavMenuUl ${isOpen ? 'active' : ''}`}>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/">Home</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/about">About</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/vehiclemodels">Vehicle Models</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/testimonialPage">Testimonials</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/ourteam">Our Team</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className='SignRegister'>
            <p>Sign In</p>
            <button style={{ fontSize: "inherit" }}>Register</button>
          </div>
        </div>
      </section>
    </>
  )
}
