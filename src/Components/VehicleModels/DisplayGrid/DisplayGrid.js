import React from 'react'
import "../DisplayGrid/DisplayGrid.css"
import { DisplayGridCard } from '../DisplayGridCard/DisplayGridCard'

export const DisplayGrid = () => {
      // Sample data for the gallery and text sections
        // const galleryItems = [
        //     { id: 1, image: 'image1.jpg' },
        //     { id: 2, image: 'image2.jpg' },
        //     { id: 3, image: 'image3.jpg' },
        //     // Add more gallery items as needed
        // ];

        // const textSections = [
        //     { id: 1, title: 'Section 1', content: 'Lorem ipsum dolor sit amet.' },
        //     { id: 2, title: 'Section 2', content: 'Consectetur adipiscing elit.' },
        //     { id: 3, title: 'Section 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        //     { id: 4, title: 'Section 4', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        // ];

  return (
    <>
        <section id='DisplayGrid'>
            <div className='DisplayGridContainer'>

                <div className="gallery">
                    {/* {galleryItems.map(item => (
                    <div key={item.id} className="card">
                        <img src={item.image} alt={`Image ${item.id}`} />
                    </div>
                    ))} */}
                    <DisplayGridCard></DisplayGridCard>
                    <DisplayGridCard></DisplayGridCard>
                    <DisplayGridCard></DisplayGridCard>
                    <DisplayGridCard></DisplayGridCard>
                    <DisplayGridCard></DisplayGridCard>
                    <DisplayGridCard></DisplayGridCard>
                    <DisplayGridCard></DisplayGridCard>
                </div>

                {/* <div className="text-sections">
                    {textSections.map(section => (
                    <div key={section.id} className="text-item">
                        <h2>{section.title}</h2>
                        <p>{section.content}</p>
                    </div>
                    ))}
                </div> */}

            </div>
        </section>
    </>
  )
}


  
// .card {
//     width: 100%;
//     height: 0;
//     padding-bottom: 100%; /* Maintain aspect ratio for images */
//     border: 1px solid #ccc;
//     overflow: hidden;
//   }
  
//   .card img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
  
//   .text-sections {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr); /* Adjust the number of columns for text sections */
//     grid-gap: 20px; /* Adjust the gap between text sections as needed */
//   }
  
//   .text-item {
//     border: 1px solid #ccc;
//     padding: 20px;
//   }
  