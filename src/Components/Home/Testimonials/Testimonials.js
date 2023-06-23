import React from 'react'
import "../Testimonials/Testimonials.css";
import { Carousel } from '../../Carousel/Carousel';


export const Testimonials = () => {
  return (
    <>
        <section id='Testimonials'>
            <div className='TestimonialsContainer'>
                <div className='top'>
                    <h3>Reviewed by people</h3>
                    <h1>Client's Testimonials</h1>
                    <p>
                        Discover the positive impact we've made on the our clients by reading through their testimonials.
                        Our clients have experienced our service and results,
                        and they're eager to share their positive experiences with you.
                    </p>
                </div>
                <div className='bottom'>
                    <Carousel></Carousel>
                </div>

            </div>
        </section>
    </>
  )
}
