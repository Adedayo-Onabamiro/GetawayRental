import React from 'react'
import "./Title.css"

export const Title = (props) => {
  let title = props.title
  let link = props.link
  return (
    <>
        <section id='title'>
            <div className='titleContainer'>
                <span>
                    <h1>{title}</h1>
                    <p> {link} </p>
                </span>
            </div>
        </section>
    </>
  )
}
