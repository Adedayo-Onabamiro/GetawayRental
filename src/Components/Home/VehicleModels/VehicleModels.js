import React, {useState, useEffect} from 'react'
import "../VehicleModels/VehicleModels.css";
import Table from '../../General/Table';


export const VehicleModels = () => {
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
                        <button>Audi A1 S-LINE</button>
                        <button>VW Gold 6</button>
                        <button>Toyota Camry</button>
                        <button> BMW 320 ModernLine</button>
                        <button>Mercedes-Benz GLK</button>
                        <button>VW Passat CC</button>
                    </div>
                    <div className='center'> <img src='/img/carsBig/golf6.jpg' /> </div>
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
