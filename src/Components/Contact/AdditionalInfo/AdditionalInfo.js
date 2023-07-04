import React from 'react';
import { motion } from 'framer-motion';
import "../AdditionalInfo/AdditionalInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactForm } from '../ContactForm/ContactForm';

export const AdditionalInfo = () => {
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5, // Adjust the duration as desired
      },
    },
  };

  return (
    <>
      <div className='AdditionalInfoContainer'>
        <motion.div
          className='AIleft'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Need additional information?</h1>
          <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <span>
            <FontAwesomeIcon icon={faPhone} />
            <p>+(080)123-456-096</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faMailBulk} />
            <p> GetawayRentals@gmail.com </p>
          </span>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
            <p> LA, USA </p>
          </span>
        </motion.div>
        <motion.div
          className='AIright'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </>
  );
};
