import { BookCar } from '../Components/Home/BookCar/BookCar';
import { Banner } from '../Components/General/Banner';
import { PlanTrip } from '../Components/Home/PlanTrip/PlanTrip';
import { SaveBig } from '../Components/Home/SaveBig/SaveBig';
import { VehicleModels } from '../Components/Home/VehicleModels/VehicleModels';
import { WhyChoose } from '../Components/Home/WhyChoose/WhyChoose';
import { Testimonials } from '../Components/Home/Testimonials/Testimonials';
import { Faq } from '../Components/Home/Faq/Faq';
import { Download } from '../Components/Home/Download/Download';
import { Footer } from '../Components/General/Footer/Footer';
import '../index.css';
import React from 'react'


export const Home = () => {
  return (
    <>
        <SaveBig></SaveBig>
        <BookCar></BookCar>
        <PlanTrip></PlanTrip>
        <VehicleModels></VehicleModels>
        <Banner></Banner>
        <WhyChoose></WhyChoose>
        <Testimonials></Testimonials>
        <Faq></Faq>
        <Download></Download>
        <Footer></Footer>
    </>
  )
}
