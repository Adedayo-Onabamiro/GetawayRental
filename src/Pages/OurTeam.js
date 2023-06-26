import React, {useState, useEffect} from 'react'
import { Title } from '../Components/General/Title/Title'
import { Footer } from '../Components/General/Footer/Footer'
import { TeamMemberCard } from '../Components/General/TeamMemberCard';


export const OurTeam = () => {
    const items = [
        {
            name : "Marcus Chillwell",
            role : "Lead Developer",
            imgSrc :  "/img/team/1.png",
        },{
            name : "Funsho Obalende",
            role : "CFO",
            imgSrc :  "/img/team/2.png",
        },{
            name : "Gani Adamu",
            role : "CTO",
            imgSrc :  "/img/team/3.png",
        },{
            name : "Adedayo Onabamiro",
            role : "CEO",
            imgSrc :  "/img/team/4.png",
        },{
            name : "Lin Jackson",
            role : "Lead Designer",
            imgSrc :  "/img/team/5.png",
        },{
            name : "Mukaku Romelu",
            role : "CRO",
            imgSrc :  "/img/team/6.png",
        }
    ];
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(items);
    
  return (
    <>
        <Title
            title= "Our Team"
            link = "Home / Our Team"
        />
        <div className='TestimonialBox'>
        {carouselItems.map((t, index) => 
                    <TeamMemberCard
                    key={t.copy + index}
                    name = {t.name}
                    role = {t.role} 
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
