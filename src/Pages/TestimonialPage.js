import React, {useState, useEffect} from 'react'
import { Title } from '../Components/General/Title/Title'
import { Footer } from '../Components/General/Footer/Footer'
import { CarouselCard } from '../Components/Carousel/CarouselCard/CarouselCard'


export const TestimonialPage = () => {
    const items = [
        {
            text: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
            tname : "Voldemort's Opposite",
            location : "Hogwarts",
            imgSrc :  "/img/testimonials/pfp1.jpg",
        },{
            text: "I normally get the batmobile from this website and always have an amazing experience!",
            tname : "Bruce Wayne",
            location : "Batcave",
            imgSrc :  "/img/testimonials/pfp2.jpg",
        },{
            text: "Harry got it from here, i did too!",
            tname : "Sir Weasely",
            location : "Hogwarts",
            imgSrc :  "/img/testimonials/pfp1.jpg",
        },{
            text: "I am inevitable",
            tname : "Thanos",
            location : "Space",
            imgSrc :  "/img/testimonials/pfp2.jpg",
        }
    ];
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(items);
    
  return (
    <>
        <Title
            title= "Testimonials"
            link = "Home / Testimonials"
        />
        <div className='TestimonialBox'>
        {carouselItems.map((t, index) => 
                    <CarouselCard
                    key={t.copy + index}
                    text = {t.text}
                    tname = {t.tname}
                    location = {t.location} 
                    imgSrc = {t.imgSrc}
                    />
                )}
        </div>
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

