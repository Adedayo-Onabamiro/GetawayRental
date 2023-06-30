import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Title } from '../Components/General/Title/Title';
import { Footer } from '../Components/General/Footer/Footer';
import { CarouselCard } from '../Components/Carousel/CarouselCard/CarouselCard';

export const TestimonialPage = () => {
  const items = [
    {
      text: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
      tname: "Voldemort's Opposite",
      location: "Hogwarts",
      imgSrc: "/img/testimonials/pfp1.jpg",
    },
    {
      text: "I normally get the batmobile from this website and always have an amazing experience!",
      tname: "Bruce Wayne",
      location: "Batcave",
      imgSrc: "/img/testimonials/pfp2.jpg",
    },
    {
      text: "Harry got it from here, i did too!",
      tname: "Sir Weasely",
      location: "Hogwarts",
      imgSrc: "/img/testimonials/pfp1.jpg",
    },
    {
      text: "I am inevitable",
      tname: "Thanos",
      location: "Space",
      imgSrc: "/img/testimonials/pfp2.jpg",
    },
  ];

  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: false,
    rootMargin: '-10% 0px',
  });

  const [SmallBannerref, SmallBannerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-10% 0px',
  });

  const [Footerref, FooterrefInView] = useInView({
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
      <Title title="Testimonials" link="Home / Testimonials" />
      <motion.div
        className="TestimonialBox"
        ref={testimonialRef}
        initial="hidden"
        animate={testimonialInView ? 'visible' : ''}
        variants={animationVariants}
      >
        {items.map((t, index) => (
          <CarouselCard
            key={t.copy + index}
            text={t.text}
            tname={t.tname}
            location={t.location}
            imgSrc={t.imgSrc}
          />
        ))}
      </motion.div>

      <motion.div
        className="SmallBanner"
        ref={SmallBannerref}
        initial="hidden"
        animate={SmallBannerInView ? 'visible' : ''}
        variants={animationVariants}
      >
        <div className="Scenter">
          <h3>Book a car by getting in touch with us</h3>
          <p>(123) 456-7869</p>
        </div>
      </motion.div>

      <motion.div
        className="Footer"
        ref={Footerref}
        initial="hidden"
        animate={FooterrefInView ? 'visible' : ''}
        variants={animationVariants}
      >
        <motion.div variants={animationVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
};

