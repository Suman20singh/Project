import React from 'react'
import "./Hero.css"
import {GoLocation} from 'react-icons/go'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='padding innerwidth flexCenter hero-container'>
            {/* Left side */}
            <div className='lexColStart hero-left'>
                <div className='hero-title'>
                    <div className='orange-circle'></div>
                    <h1>
                        Discover <br />
                        Most Suitable <br /> Property
                    </h1>

                </div>
                <div className='flexColStart hero-des'>
                    <span className='secondaryText'> Find a variety of properties that suit you very easilty </span>
                    <span className='secondaryText'> Forget all difficulties in finding a residence for you </span>

                </div>
                <div className='flexCenter search-bar'>
                    <GoLocation color="var(--black)" size={25}/>
                    <input type='text' />
                    <button className='button'>Search</button>

                </div>

                <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp  end={28}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winings</span>
                    </div>
                </div>


            </div>
            {/* Right side */}
            <div className='flexCenter hero-right'>
                <div className='image-container'>
                    <img src='./hero.jpg' alt='' />
                </div>
            </div>





        </div>
    </section>
  )
}

export default Hero
