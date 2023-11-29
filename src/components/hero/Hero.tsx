import React from 'react';
import './Hero.scss';
import redLogo from '../../assets/icons/logo-1.png';

type HeroProps = {};

const Hero = (props: HeroProps) => {

  return (
    <div className='hero'>
        <div className="hero-inner">
            <img src={redLogo} alt="" className='red-logo'/>
        </div>
    </div>
  );

}

export default Hero;