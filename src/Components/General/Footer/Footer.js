import React from 'react'
import "../Footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <>
        <section id='footer'>
            <div className='footerContainer'>
                <div className='fone'>
                    <span><h3>CAR</h3><h5>Rental</h5></span>
                    <p style={{color: "gray"}}>
                    We offer a big range of vehicles for all your driving needs.
                     We have the perfect car to meet your needs.
                    </p>
                    <span>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>(123) -456-789</p>
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faMailBulk} />
                        <p> carrental@gmail.com</p>
                    </span>


                </div>
                <div className='ftwo'>
                    <h2>COMPANY</h2>
                    <div>
                    <p> <a href="/index.html"> Lagos </a> </p>
                        <p> <a href="/pagesFolder/pages.html"> Careers</a> </p>
                        <p> <a href="#TS"> Mobile </a> </p>
                        <p> <a href="#AUOH"> Blog </a> </p>
                        <p> <a href="#TS"> How we work </a> </p>
                    </div>
                </div>
                <div className='fthree'>
                    <h3>WORKING HOURS</h3>
                    <div>
                        <p>Mon - Fri: 9:00AM - 9:00PM</p>
                        <p>Sat: 9:00AM - 19:00PM</p>
                        <p>Sun: Closed</p>
                    </div>
                </div>
                <div className='ffour'>
                    <h3>SUBSCRIPTION</h3>
                    <p>Subscribe your Email address for latest news & updates.</p>
                    {/* <button style={{backgroundColor: "grey"}}>Enter Email Address</button> */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button>Submit</button>
                </div>
            </div>
        </section>
    </>
  )
}
