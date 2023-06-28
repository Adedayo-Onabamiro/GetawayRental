// import React from 'react'
// import "../DisplayGrid/DisplayGrid.css"
// import { DisplayGridCard } from '../DisplayGridCard/DisplayGridCard'

// export const DisplayGrid = () => {
//   return (
//     <>
//         <section id='DisplayGrid'>
//             <div className='DisplayGridContainer'>

//                 <div className="gallery">
//                     <DisplayGridCard></DisplayGridCard>
//                     <DisplayGridCard></DisplayGridCard>
//                     <DisplayGridCard></DisplayGridCard>
//                     <DisplayGridCard></DisplayGridCard>
//                     <DisplayGridCard></DisplayGridCard>
//                     <DisplayGridCard></DisplayGridCard>
//                     <DisplayGridCard></DisplayGridCard>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }


import React from 'react'
import "../DisplayGrid/DisplayGrid.css"
import { DisplayGridCard } from '../DisplayGridCard/DisplayGridCard'
import { CarDataLocal } from '../../../Data/CarDataLocal'

export const DisplayGrid = () => {
  return (
    <>
        <section id='DisplayGrid'>
            <div className='DisplayGridContainer'>

                <div className="gallery">
                {CarDataLocal.map((cardData) => (
                    <DisplayGridCard key={cardData.id} {...cardData} />
                ))}
                </div>
            </div>
        </section>
    </>
  )
}


  