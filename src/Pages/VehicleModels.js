import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Title } from '../Components/General/Title/Title';
import { Footer } from '../Components/General/Footer/Footer';
import { DisplayGrid } from '../Components/VehicleModels/DisplayGrid/DisplayGrid';

export const VehicleModels = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [gridRef, gridInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [bannerRef, bannerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
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
        title="Vehicle Models"
        link="Home / Vehicle Models"
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? 'visible' : ''}
        variants={animationVariants}
      />

      <motion.div
        className="DisplayGrid"
        ref={gridRef}
        initial="hidden"
        animate={gridInView ? 'visible' : ''}
        variants={animationVariants}
      >
        <DisplayGrid />
      </motion.div>

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

      <Footer />
    </>
  );
};
