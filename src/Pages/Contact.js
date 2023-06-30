import React, {useState, useEffect} from 'react'
import { Title } from '../Components/General/Title/Title'
import { Footer } from '../Components/General/Footer/Footer'
import { AdditionalInfo } from '../Components/Contact/AdditionalInfo/AdditionalInfo'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const Contact = () => {

  const [bannerRef, bannerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-10% 0px',
  });

  const [footerRef, footerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-10% 0px',
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Adjust the duration as desired
      },
    },
  };
  return (
    <>
          <Title
            title= "Contact"
            link = "Home / Contact"
        />
        <AdditionalInfo />
        <motion.div
        className="SmallBanner"
        ref={bannerRef}
        initial="hidden"
        animate={bannerInView ? 'visible' : ''}
        variants={animationVariants}
      >
        <div className="Scenter">
          <h3>Book a car by getting in touch with us</h3>
          <p>(123) 456-7869</p>
        </div>
      </motion.div>
      
      <motion.div
        className="Footer"
        ref={footerRef}
        initial="hidden"
        animate={footerInView ? 'visible' : ''}
        variants={animationVariants}
      >
        <Footer />
      </motion.div>
    </>
  )
}
