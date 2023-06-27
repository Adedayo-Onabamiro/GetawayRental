import React, {useState, useEffect} from 'react'
import "../VehicleModels/VehicleModels.css";
import Table from '../../General/Table';
import { CarDataLocal } from '../../../Data/CarDataLocal';


export const VehicleModels = () => {
    const [selectedItem, setSelectedItem] = useState(CarDataLocal[0]); // Set initial selected item

    const handleButtonClick = (itemId) => {
      const selectedItem = CarDataLocal.find((item) => item.id === itemId);
      setSelectedItem(selectedItem);
    };
  
  return (
    <>  
        <section id='VehicleModels'>
            <div className='VehicleModelsContainer'>
                <div className='topTexts'>
                    <h3>Vehicle Models</h3>
                    <h1>Our rental fleet</h1>
                    <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                </div>
                <div className='box'>
                    <div className='left'>
                    {CarDataLocal.map((item) => (
                        <button key={item.id} onClick={() => handleButtonClick(item.id)}>
                        {item.name}
                        </button>
                    ))}
                    </div>
                    <div className='center'> <img src={selectedItem.img} /> </div>
                    <div className='right'>
                        <div className='top'> <p> <span>$45</span> / rent per day</p> </div>
                        <div className='middle'>
                            <Table></Table>
                        </div>
                        <div className='bottom'> <p>RESERVE NOW</p> </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
