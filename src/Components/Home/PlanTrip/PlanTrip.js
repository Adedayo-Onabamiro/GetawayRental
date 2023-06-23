import React from 'react'
import "../PlanTrip/PlanTrip.css";
import {Card} from '../../General/Card';

export const PlanTrip = () => {
  return (
    <>
        <section id='PlanTrip'>
            <div className='PlanTripContainer'>
                <h3>Plan your trip now</h3>
                <h1>Quick & easy car rental</h1>
                <div className='box'>
                    <Card 
                        imgSrc = '/img/plan/icon1.png'
                        topic = "Select Car"
                        text = "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
                    />
                    <Card 
                        imgSrc = '/img/plan/icon2.png'
                        topic = "Contact Operator"
                        text = "Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
                    />

                    <Card 
                        imgSrc = '/img/plan/icon3.png'
                        topic = "Lets Drive"
                        text = "Whether you're hitting the open road, we've got you covered with our wide range of cars"
                    />
                </div>
            </div>
        </section>
    </>
  )
}
