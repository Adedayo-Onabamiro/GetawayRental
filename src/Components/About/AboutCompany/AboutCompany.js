import "../AboutCompany/AboutCompany.css";
import React, { useState, useEffect } from 'react';
import { YoutubeIcon } from '../../General/YoutubeIcon.js'


export const AboutCompany = () => {
  const [carTypes, setCarTypes] = useState(0);
  const [rentalOutlets, setRentalOutlets] = useState(0);
  const [repairShops, setRepairShops] = useState(0);

  useEffect(() => {
    const animateCount = (targetValue, setter) => {
      let currentValue = 0;
      const increment = targetValue / 200; // Adjust the increment value as per your preference

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          clearInterval(timer);
          currentValue = targetValue;
        }

        setter(Math.floor(currentValue));
      }, 20); // Adjust the interval duration (in milliseconds) for a slower animation
    };

    animateCount(20, setCarTypes);
    animateCount(85, setRentalOutlets);
    animateCount(75, setRepairShops);
  }, []);

  
  return (
    <>
        <section id='AboutCompany'>
            <div className='AboutCompanyContainer'>
                <div className='aleft'> 
                  <img src='img/about/about-main.jpg' />
                  <a href='#'><div className='youtubeBox'> <YoutubeIcon size={40} color="white" /> </div></a>
                 </div>
              
                <div className='aright'>
                  <p className='title'>About Company</p>
                  <h1> You start the engine and your adventure begins</h1>
                  <p>
                      Certain but she but shyness why cottage. 
                      Guy the put instrument sir entreaties affronting. 
                      Pretended exquisite see cordially the you.
                       Weeks quiet do vexed or whose.
                        Motionless if no to affronting imprudence no precaution. 
                        My indulged as disposal strongly attended."
                  </p>

                  <div className='featureContainer'>
            <div className='featureBox'>
              <img src='/img/about/icon1.png' />
              <span>
                <h1>{carTypes}</h1>
                <p>Car Types</p>
              </span>
            </div>

            <div className='featureBox'>
              <img src='/img/about/icon2.png' />
              <span>
                <h1>{rentalOutlets}</h1>
                <p>Rental Outlets</p>
              </span>
            </div>

            <div className='featureBox'>
              <img src='/img/about/icon3.png' />
              <span>
                <h1>{repairShops}</h1>
                <p>Repair Shops</p>
              </span>
            </div>
                  </div>

                </div>
            </div>
        </section>
    </>
  )
}
