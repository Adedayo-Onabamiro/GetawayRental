import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookCar } from '../Components/Home/BookCar/BookCar';
import { Banner } from '../Components/General/Banner';
import { PlanTrip } from '../Components/Home/PlanTrip/PlanTrip';
import { SaveBig } from '../Components/Home/SaveBig/SaveBig';
import { VehicleModels } from '../Components/Home/VehicleModels/VehicleModels';
import { WhyChoose } from '../Components/Home/WhyChoose/WhyChoose';
import { Testimonials } from '../Components/Home/Testimonials/Testimonials';
import { Faq } from '../Components/Home/Faq/Faq';
import { Download } from '../Components/Home/Download/Download';
import { Footer } from '../Components/General/Footer/Footer';
import '../index.css';

export const Home = () => {
  const [bookCarRef, bookCarInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [planTripRef, planTripInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [saveBigRef, saveBigInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [vehicleModelsRef, vehicleModelsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [bannerRef, bannerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [whyChooseRef, whyChooseInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [downloadRef, downloadInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [footerRef, footerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      <SaveBig></SaveBig>
      <motion.div
        ref={bookCarRef}
        className="animation-container"
        initial="hidden"
        animate={bookCarInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <BookCar></BookCar>
      </motion.div>
      
      <motion.div
        ref={planTripRef}
        className="animation-container"
        initial="hidden"
        animate={planTripInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <PlanTrip></PlanTrip>
      </motion.div>
      <motion.div
        ref={vehicleModelsRef}
        className="animation-container"
        initial="hidden"
        animate={vehicleModelsInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <VehicleModels></VehicleModels>
      </motion.div>
      <motion.div
        ref={bannerRef}
        className="animation-container"
        initial="hidden"
        animate={bannerInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <Banner></Banner>
      </motion.div>
      <motion.div
        ref={whyChooseRef}
        className="animation-container"
        initial="hidden"
        animate={whyChooseInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <WhyChoose></WhyChoose>
      </motion.div>
      <motion.div
        ref={testimonialsRef}
        className="animation-container"
        initial="hidden"
        animate={testimonialsInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <Testimonials></Testimonials>
      </motion.div>
      <motion.div
        ref={faqRef}
        className="animation-container"
        initial="hidden"
        animate={faqInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <Faq></Faq>
      </motion.div>
      <motion.div
        ref={downloadRef}
        className="animation-container"
        initial="hidden"
        animate={downloadInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <Download></Download>
      </motion.div>
      <motion.div
        ref={footerRef}
        className="animation-container"
        initial="hidden"
        animate={footerInView ? 'visible' : 'hidden'}
        variants={animationVariants}
      >
        <Footer></Footer>
      </motion.div>
    </>
  );
};
