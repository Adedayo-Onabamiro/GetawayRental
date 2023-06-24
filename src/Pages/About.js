import React from 'react'
import { Title } from '../Components/About/Title/Title'
import { AboutCompany } from '../Components/About/AboutCompany/AboutCompany'
import { PlanTrip } from '../Components/Home/PlanTrip/PlanTrip';
import { Footer } from '../Components/General/Footer/Footer';

export const About = () => {
  return (
    <>
        <Title></Title>
        <AboutCompany></AboutCompany>
        <PlanTrip></PlanTrip>
        <div className='SmallBanner'>
          <div className='Scenter'>
                    <h3> Book a car by getting in touch with us </h3>
                    <p> (123) 456-7869 </p>
          </div>
      </div>
        <Footer></Footer>
    </>
  )
}
