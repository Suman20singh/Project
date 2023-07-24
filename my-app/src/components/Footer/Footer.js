import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>
            {/* Left side */}
            <div className='flexColStart f-left' >
                <img src='./logo3.png' alt='' width={120}/>
                <span className='secondaryText'>
                    Our vision is to make all people <br/>
                    The best place to live for them
                </span>
            </div>
            {/* Right side */}
            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'> 18 NewBr, Noida, UP</span>
                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
