import React from 'react'
import "../Download/Download.css";

export const Download = () => {
  return (
    <>
        <section id='Download'>
            <div className='DownloadContainer'>
                    <div className='left'>
                        <p className='title'> Download our app to get most out of it </p>
                        <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                        <div className='buttonsBox'>
                          <a href='#' className='downloadbtn' > <img src='/img/download/appstore.svg' /> </a>
                          <a href='#' className='downloadbtn' > <img src='/img/download/googleapp.svg' />  </a>
                        </div>
                    </div>
                    <div className='right'>
                        <img src='/img/banners/bg02.png' />
                    </div>       
            </div>
        </section>
    </>
  )
}
