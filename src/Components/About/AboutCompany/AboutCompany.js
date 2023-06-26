import React from 'react'
import "../AboutCompany/AboutCompany.css";
import { YoutubeIcon } from '../../General/YoutubeIcon.js'


export const AboutCompany = () => {
  return (
    <>
        <section id='AboutCompany'>
            <div className='AboutCompanyContainer'>
                <div className='aleft'> 
                  <img src='img/about/about-main.jpg' />
                  <div className='youtubeBox'> <YoutubeIcon size={40} color="white" /> </div>
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
                      <h1>20</h1>
                      <p>Car Types</p>
                      </span>
                    </div>

                    <div className='featureBox'>
                      <img src='/img/about/icon2.png' />
                      <span>
                      <h1>85</h1>
                      <p>Rental Outlets</p>
                      </span>
                    </div>

                    <div className='featureBox'>
                      <img src='/img/about/icon3.png' />
                      <span>
                      <h1>75</h1>
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
