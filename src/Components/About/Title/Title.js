import React from 'react'
import { Navigation } from '../../General/Navigation/Navigation'
import "../Title/Title.css"

export const Title = () => {
  return (
    <>
        <section id='title'>
            <div className='titleContainer'>
                <span>
                    <h1>About</h1>
                    <p>Home / About</p>
                </span>
            </div>
        </section>
    </>
  )
}
