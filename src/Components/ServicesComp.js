import React, { Fragment } from 'react'
import ImgWallet1 from '../images/s1.png'
import ImgWallet2 from '../images/s2.png'
import ImgWallet3 from '../images/s3.png'
import { Link } from 'react-router-dom'

const ServicesComp = () => {
  return (
    <Fragment>
    <section className='our-services'>
    <div className='text-services'>
    <h1>Our <span>Services</span></h1>
    <p>There are many variations of passages of Lorem Ipsum
       available, but the majority have suffered alteration</p>
    </div>
       <div className='container'>
        <div className='cards-services'>
          <div data-aos="fade-down-right" className='card-services'>
            <img src={ImgWallet1} alt=''></img>
            <h2>CURRENCY WALLET</h2>
            <p>fact that a reader will be distracted by the readable content of a page when 
              looking at its layout. The point of using</p>
              <Link>Read More</Link>
          </div>
          <div data-aos="fade-up" className='card-services'>
            <img src={ImgWallet2} alt=''></img>
            <h2>CURRENCY WALLET</h2>
            <p>fact that a reader will be distracted by the readable content of a page when 
              looking at its layout. The point of using</p>
              <Link>Read More</Link>
          </div>
          <div data-aos="fade-down-left" className='card-services'>
            <img src={ImgWallet3} alt=''></img>
            <h2>CURRENCY WALLET</h2>
            <p>fact that a reader will be distracted by the readable content of a page when 
              looking at its layout. The point of using</p>
              <Link>Read More</Link>
          </div>
        </div>
       </div>
    <button className='btn-all'>View All</button>
   </section>
   </Fragment>
  )
}

export default ServicesComp
