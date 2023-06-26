import React from 'react'
import "../AdditionalInfo/AdditionalInfo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { ContactForm } from '../ContactForm/ContactForm'

export const AdditionalInfo = () => {
  return (
    <>
        <div className='AdditionalInfoContainer'>
            <div className='AIleft'>
                <h1>Need additional information?</h1>
                <p>A multifaceted professional skilled in multiple fields of research,
                    development as well as a learning specialist.
                    Over 15 years of experience.
                </p>
                <span> <FontAwesomeIcon icon={faPhone} /> <p>+(080)123-456-096</p> </span>
                <span> <FontAwesomeIcon icon={faMailBulk} /> <p> GetawayRentals@gmail.com </p> </span>
                <span> <FontAwesomeIcon icon={faLocationDot} /> <p> LA, USA </p> </span>
            </div>
            <div className='AIright'>
                <ContactForm />
            </div>
        </div>
    </>
  )
}
