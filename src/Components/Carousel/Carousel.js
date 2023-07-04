import React, {useState, useEffect} from 'react'
import { CarouselCard } from './CarouselCard/CarouselCard';
import "../Carousel/Carousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export const Carousel = () => {
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
            text: "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
            tname : "Shola David",
            location : "Nigeria",
            imgSrc :  "/img/testimonials/pfp2.jpg",
        },{
            text: "Way better than using horses daily and its affordable, really!",
            tname : "Shirly Dickens",
            location : "Texas",
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
    
    useEffect(() => {
      document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems])
    
    const handleAnimationEnd = () => {
      if(moveClass === 'prev'){
        shiftNext([...carouselItems]);
      }else if(moveClass === 'next'){
        shiftPrev([...carouselItems]);
      }
      setMoveClass('')
    }
    
    const shiftPrev = (copy) => {
      let lastcard = copy.pop();
      copy.splice(0, 0, lastcard);
      setCarouselItems(copy);
    }
    
    const shiftNext = (copy) => {
      let firstcard = copy.shift();
      copy.splice(copy.length, 0, firstcard);
      setCarouselItems(copy);
    }
  return (
        <div className="carouselwrapper">
            <div className="ui">
                {/* control buttons */}
                    <button onClick={() => setMoveClass('next')} className="prev">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button onClick={() => setMoveClass('prev')} className="next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                {/* control buttons */}
            </div>

            <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
                {carouselItems.map((t, index) => 
                    <CarouselCard 
                    // key={t.copy + index}
                    key={`${t.text}-${index}`}
                    text = {t.text}
                    tname = {t.tname}
                    location = {t.location} 
                    imgSrc = {t.imgSrc}
                    />
                )}
            </ul>
        </div>
  )
}