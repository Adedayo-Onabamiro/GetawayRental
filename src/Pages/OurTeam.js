import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Title } from '../Components/General/Title/Title';
import { Footer } from '../Components/General/Footer/Footer';
import { TeamMemberCard } from '../Components/General/TeamMemberCard';

export const OurTeam = () => {
  const items = [
    {
      name: "Adedayo Onabamiro",
      role: "CEO",
      imgSrc: "/img/team/1.png",
    },
    {
      name: "Funsho Obalende",
      role: "CFO",
      imgSrc: "/img/team/2.png",
    },
    {
      name: "Gani Adamu",
      role: "CTO",
      imgSrc: "/img/team/3.png",
    },
    {
      name: "Marcus Chillwell",
      role: "Lead Developer",
      imgSrc: "/img/team/4.png",
    },
    {
      name: "Lin Jackson",
      role: "Lead Designer",
      imgSrc: "/img/team/5.png",
    },
    {
      name: "Mukaku Romelu",
      role: "CRO",
      imgSrc: "/img/team/6.png",
    },
  ];

  const [teamRef, teamInView] = useInView({
    triggerOnce: false,
    rootMargin: '-10% 0px',
  });

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
      <Title title="Our Team" link="Home / Our Team" />
      <motion.div
        className="TestimonialBox"
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? 'visible' : ''}
        variants={animationVariants}
      >
        {items.map((t, index) => (
          <TeamMemberCard
            key={t.copy + index}
            name={t.name}
            role={t.role}
            imgSrc={t.imgSrc}
          />
        ))}
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
  );
};
