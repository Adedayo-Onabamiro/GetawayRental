import React, {useState, useEffect} from 'react'
import { Title } from '../Components/General/Title/Title'
import { Footer } from '../Components/General/Footer/Footer'
import { AdditionalInfo } from '../Components/Contact/AdditionalInfo/AdditionalInfo'

export const Contact = () => {
  return (
    <>
          <Title
            title= "Contact"
            link = "Home / Contact"
        />
        <AdditionalInfo />
        <div className='SmallBanner'>
          <div className='Scenter'>
                <h3> Book a car by getting in touch with us </h3>
                <p> (123) 456-7869 </p>
          </div>
        </div>
        <Footer />
    </>
  )
}
