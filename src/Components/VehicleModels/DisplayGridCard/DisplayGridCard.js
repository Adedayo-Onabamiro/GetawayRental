// import React from 'react'
// import "../DisplayGridCard/DisplayGridCard.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCar, faLuggageCart, faStar } from '@fortawesome/free-solid-svg-icons'

// export const DisplayGridCard = () => {
//   return (
//     <>
//       <div className="img-card iCard-style3">
//         <div className="card-content">
//             <div className="card-image">
//                 <img src='/img/carsBig/benz.jpg' />
//             </div>
            
//             <div className="cardDetails">
//                 <div className='CDleft'>
//                   <h2>Audi A3</h2>
//                   <span className='starContainer'>
//                     <FontAwesomeIcon icon={faStar} /> 
//                     <FontAwesomeIcon icon={faStar} />
//                     <FontAwesomeIcon icon={faStar} /> 
//                     <FontAwesomeIcon icon={faStar} />
//                     <FontAwesomeIcon icon={faStar} /> 
//                   </span>
//                   <div className='imgandtext'>
//                     <FontAwesomeIcon className='icon' icon={faCar}></FontAwesomeIcon>
//                     <p>Sedan</p>

//                   </div>
//                   <div className='imgandtext'>
//                     <FontAwesomeIcon className='icon' icon={faCar}></FontAwesomeIcon>
//                     <p>5 Seats</p>

//                   </div>
//                 </div>
//                 <div className='CDright'>
//                   <h2> $75 </h2>
//                   <span> per day</span>
//                   <div className='imgandtext'>
//                     <FontAwesomeIcon className='icon' icon={faLuggageCart}></FontAwesomeIcon>
//                     <p>2 Luggage(s)</p>

//                   </div>
//                   <div className='imgandtext'>
//                     <FontAwesomeIcon className='icon' icon={faCar}></FontAwesomeIcon>
//                     <p>4 Engines</p>

//                   </div>
//                 </div>
//             </div>

//             <div className='cardBottom'>
//               <button>Book Ride</button>
//             </div>
//           </div>  
//         </div>
//     </>
//   )
// }

import React from 'react'
import "../DisplayGridCard/DisplayGridCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCarRear, faCarSide, faLuggageCart, faStar } from '@fortawesome/free-solid-svg-icons'

export const DisplayGridCard = ({name,carClass,img, doors,price, transmission}) => {
  return (
    <>
      <div className="img-card iCard-style3">
        <div className="card-content">
            <div className="card-image">
                <img src={img} />
            </div>
            
            <div className="cardDetails">
            <div className='CDRow'>
              <h2> {name} </h2>
              <span>
                <h2> ${price}</h2>
                <p> per day</p>
              </span>
            </div>
            <div className='CDRow'>
                  <span className='starContainer'>
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> 
                  </span>
            </div>
            <div className='CDRow'>
                  <div className='imgandtext'>
                    <FontAwesomeIcon className='icon' icon={faCar}></FontAwesomeIcon>
                    <p> {carClass} </p>
                  </div>
                  <div className='imgandtext'>
                    <FontAwesomeIcon className='icon' icon={faCar}></FontAwesomeIcon>
                    <p> {doors} Doors </p>
                  </div>
            </div>
            <div className='CDRow'>
            <div className='imgandtext'>
                    <FontAwesomeIcon className='icon' icon={faLuggageCart}></FontAwesomeIcon>
                    <p>2 Luggage(s)</p>
                  </div>
                  <div className='imgandtext'>
                    <FontAwesomeIcon className='icon' icon={faCarSide}></FontAwesomeIcon>
                    <p>{transmission}</p>
                  </div>
            </div>
            </div>

            <div className='cardBottom'>
              <button>Book Ride</button>
            </div>

          </div> 
        </div>
    </>
  )
}