import React from 'react'
import "../CarouselCard/CarouselCard.css";

export const CarouselCard = (props) => {
    let text = props.text
    let tname = props.tname
    let location = props.location
    let imgSrc = props.imgSrc
    // '/img/testimonials/pfp1.jpg'
  return (
    <>
        <div className='CarouselCard'>
            <div className='top'>
                <p>"{text}"</p>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <img src={imgSrc}/>
                    <span>
                        <h2 >{tname}</h2>
                        <p>{location}</p>
                    </span>
                </div>
                <div className='right'>
                    <h1>"</h1>
                </div>
            </div>
        </div>
    </>
  )
}
