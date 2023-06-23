import React from 'react'
import "../SaveBig/SaveBig.css";
// import { Navigation } from '../../General/Navigation/Navigation';

export const SaveBig = () => {
  return (
    <>
        <section id='SaveBig'>
            {/* <Navigation></Navigation> */}
            <div className='SaveBigContainer'>
                <div className='left'>
                    <p className='one' style={{fontWeight: "700"}}>Plan your trip now</p>
                    <h1 className='two'  style={{fontWeight: "700"}}>Save <span style={{color: "#ff5130"}}>big</span> with our car rental</h1>
                    <p className='three'  style={{color: "#d3d3d8"}}>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                    <div className='BookRideLearnMore'>
                        <button style={{fontWeight: "700"}}> Book Ride</button>
                        <button style={{backgroundColor: "black", fontWeight: "700"}}> Learn More </button>
                    </div>
                </div>
                <div className='right'>
                    <img src='img/hero/main-car.png' />
                </div>
            </div>
            <div className='herobg' style={{backgroundImage: `url('img/hero/hero-bg.png')`}}> </div>
        </section>
    </>
  )
}
