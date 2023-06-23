import React from 'react'

export const Card = (props) => {
    let imgSrc = props.imgSrc
    let topic = props.topic
    let text = props.text
  return (
    <div className='card'>
        <img src={imgSrc}></img>
        <h2> {topic} </h2>
        <p>{text}</p>
    </div>
  )
}
