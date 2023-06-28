import React from 'react'
import "../WhyChoose/WhyChoose.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const WhyChoose = () => {
  return (
    <>
        <section id='WhyChoose'>
            <div className='WhyChooseContainer'>
                <img className='bgImg' src='/img/chooseUs/bg.png' />
                <div className='imageBox'>
                    <img src='/img/chooseUs/main.png' />
                </div>
                <div className='contentBox'>
                    <div className='left'>
                        <p className='title'>Why Choose Us</p>
                        <h1>Best valued deals you will ever find</h1>
                        <p>Discover the best deals you'll ever find with our unbeatable offers. 
                            We're dedicated to providing you with the best value for your money,
                             so you can enjoy top-quality services and products without breaking the bank.
                              Our deals are designed to give you the ultimate renting experience,
                               so don't miss out on your chance to save big.
                        </p>
                        <button>Find Details <FontAwesomeIcon icon={faChevronRight} /> </button>
                    </div>
                    <div className='right'>
                        <div className='box'>
                            <div className='left'>
                                <img src='img/chooseUs/icon1.png' />
                            </div>
                            <div className='right'>
                                <span> <p className='rtext'>Cross Country Drive</p> </span>
                                <span> <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p> </span>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='left'>
                                <img src='img/chooseUs/icon2.png' />
                            </div>
                            <div className='right'>
                                <span> <p className='rtext'>All Inclusive Pricing</p> </span>
                                <span> <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p> </span>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='left'>
                                <img src='img/chooseUs/icon3.png' />
                            </div>
                            <div className='right'>
                                <span> <p className='rtext'>No Hidden Charges</p> </span>
                                <span> <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
