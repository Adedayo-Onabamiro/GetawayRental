import React from 'react'
import "../Faq/Faq.css"
import { Accordion } from '../Accordion/Accordion';

export const Faq = (props) => {
    const panels = [
        {
          label: 'What is special about comparing rental car deals?',
          content: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.',
        },
          {
          label: 'Fix problems & request removals',
          content: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.',
        },
          {
          label: 'How do I find such low rental car prices?',
          content: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.',
        },
            {
          label: 'Search on your phone or tablet',
          content: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
        },
        
      ]
  return (
    <>
        <section id='Faq'>
            <div className='FaqContainer'>
                <div className='top'>
                    <h3>FAQ</h3>
                    <h1>Frequently Asked Questions</h1>
                    <p>
                        Frequently Asked Questions About the Car Rental Booking Process on Our Website:
                        Answers to Common Concerns and Inquiries.
                    </p>
                </div>
                <div className='bottom'>
                    <Accordion
                        panels={panels}
                    ></Accordion>
                </div>
                <img className='bgCar' src='/img/faq/car.png' />
            </div>
        </section>
    </>
  )
}

  
//   function FAQ(props) {    
  

//   const Question = props => {
//    const [isActive, setActive] = React.useState(false);
//    const handleClick = (id) => {
//     setActive(!isActive)
//   }
//     return(
//       <div className="question-wrapper">
//       <div className='question' id={props.id}>
//         <h3>{props.question}</h3>
//         <button onClick={() => handleClick(props.id)}>
//           <svg className={isActive? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
//     <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
//   </svg>
//         </button>     
//       </div>
//       <div className={isActive? 'answer active' : 'answer'}>{props.answer}</div>
//       </div>
//     )
//   }
  
//   ReactDOM.render(<FAQ data={questions}/>, document.querySelector('#root'));