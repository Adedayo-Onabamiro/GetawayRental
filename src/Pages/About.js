
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Title } from '../Components/General/Title/Title';
import { AboutCompany } from '../Components/About/AboutCompany/AboutCompany';
import { PlanTrip } from '../Components/Home/PlanTrip/PlanTrip';
import { Footer } from '../Components/General/Footer/Footer';

export const About = () => {
  const [refAboutCompany, inViewAboutCompany] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [refPlanTrip, inViewPlanTrip] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [refSmallBanner, inViewSmallBanner] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [refFooter, inViewFooter] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const componentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Title title="About" link="Home / About" />

      <motion.div
        ref={refAboutCompany}
        variants={componentVariants}
        initial={inViewAboutCompany ? 'visible' : 'hidden'}
        animate={inViewAboutCompany ? 'visible' : 'hidden'}
      >
        <AboutCompany />
      </motion.div>

      <motion.div
        ref={refPlanTrip}
        variants={componentVariants}
        initial={inViewPlanTrip ? 'visible' : 'hidden'}
        animate={inViewPlanTrip ? 'visible' : 'hidden'}
      >
        <PlanTrip />
      </motion.div>

      <div className="SmallBanner" ref={refSmallBanner}>
        <div className="Scenter">
          <motion.h3
            variants={componentVariants}
            initial={inViewSmallBanner ? 'visible' : 'hidden'}
            animate={inViewSmallBanner ? 'visible' : 'hidden'}
          >
            Book a car by getting in touch with us
          </motion.h3>
          <motion.p
            variants={componentVariants}
            initial={inViewSmallBanner ? 'visible' : 'hidden'}
            animate={inViewSmallBanner ? 'visible' : 'hidden'}
          >
            (123) 456-7869
          </motion.p>
        </div>
      </div>

      <motion.div
        ref={refFooter}
        variants={componentVariants}
        initial={inViewFooter ? 'visible' : 'hidden'}
        animate={inViewFooter ? 'visible' : 'hidden'}
      >
        <Footer />
      </motion.div>
    </>
  );
};
