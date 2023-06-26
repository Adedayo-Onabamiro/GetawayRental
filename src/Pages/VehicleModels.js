import React from 'react'
import { Title } from '../Components/General/Title/Title'
import { Footer } from '../Components/General/Footer/Footer';
import { DisplayGrid } from '../Components/VehicleModels/DisplayGrid/DisplayGrid';

export const VehicleModels = () => {
  return (
    <>
        <Title 
          title= "Vehicle Models"
          link = "Home / Vehicle Models"
        ></Title>
        <DisplayGrid></DisplayGrid>
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
