import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import '../SaveBig/SaveBig.css';

export const SaveBig = () => {
  return (
    <section id="SaveBig">
      <div className="SaveBigContainer">
        <motion.div
          className="left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="one" style={{ fontWeight: "700" }}>
            Plan your trip now
          </p>
          <h1 className="two" style={{ fontWeight: "700" }}>
            Save <span style={{ color: "#ff5130" }}>big</span> with our car rental
          </h1>
          <p className="three" style={{ color: "#d3d3d8" }}>
            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
          </p>
          <div className="BookRideLearnMore">
            <Link to="BookCar" className="linktag" smooth={true} duration={500}>
              <motion.button
                style={{ fontWeight: "700" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Ride <FontAwesomeIcon icon={faCheckCircle} />
              </motion.button>
            </Link>
            <motion.button
              className="btn2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More <FontAwesomeIcon icon={faChevronRight} />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="img/hero/main-car.png" alt="Car" />
        </motion.div>
      </div>
      <div
        className="herobg"
        style={{ backgroundImage: `url('img/hero/hero-bg.png')` }}
      ></div>
    </section>
  );
};
