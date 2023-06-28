import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Banner = () => {
  return (
    <div className='Banner'>
            <div className='center'>
                <div className='cleft'>
                  <h3>Save big with our cheap car rental!</h3>
                  <p>Top Airports. Local Suppliers. 24/7 Support</p>
                </div>
                <div className='cright'>
                  <button>Book Ride <FontAwesomeIcon  icon={faCircleCheck}/> </button>
              </div>
            </div>
        <div className='BannerContainer'>
            <div className='left'></div>
            <div className='right'></div>
        </div>
    </div>
  )
}
