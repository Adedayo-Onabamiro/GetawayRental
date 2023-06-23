import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Navigation/Navigation.css";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {  
    const handleScroll = () => {
      const menuHeight = document.querySelector(".NavMenuUl").offsetHeight;
      if (window.pageYOffset > menuHeight * 0.1) {
        setIsOpen(false);
      }
      else {
        // setShowNavbar (true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // }
    }, []);

  return (
    <>
      <section className="Header" id="Header">
        <div className="TopNavContainer">
          <div className="LogoBox">
              <img src="../img/logo/logo.png" alt='logo' />
          </div>
          <nav className= "NavMenuContainer">
            <div className="hamburger" onClick={handleToggleMenu}>
              <div className="bar"></div>
            </div>
            <ul className={`NavMenuUl ${isOpen ? 'active' : ''}`}>
              <li className="NavMenuLi"> <Link to = "/"> Home </Link> </li>
              <li className="NavMenuLi"> <Link to = "/about"> About </Link> </li>
              <li className="NavMenuLi"> <Link to = "/vehiclemodels "> Vehicle Models  </Link> </li>
              <li className="NavMenuLi"> <Link to = "/testimonials"> Testimonials </Link>    </li>
              <li className="NavMenuLi"> <Link to = "/ourteam ">  Our Team  </Link> </li>
              <li className="NavMenuLi"> <Link to = "/contact "> Contact </Link> </li>
            </ul>
          </nav>

          <div className='SignRegister'>
              <p>Sign In</p>
              <button style={{ fontSize: "inherit" }}> Register </button>
          </div>
        </div>
      </section>
    </>
  )
}

