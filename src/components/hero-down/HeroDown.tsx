import React, { useEffect, useRef } from 'react';
import './HeroDown.scss';
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const HeroDown = () => {

  useEffect( () => {
    revealAnim();
    textReveal();
  }, []);

  const textReveal = () => {
    gsap.fromTo(
      '#para',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#para',
          start: 'top 90%',
          scrub: false,
        },
      }
    );
  }

  const revealAnim = () => {
    gsap.fromTo(
      '.hero-down',
      { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
      {
        clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
        scrollTrigger: {
          trigger: '.hero-down',
          start: 'top 70%',
          scrub: false,
        },
      }
    );
  };

  return (
    <div className='hero-down'>
        <div className='hero-down-inner'>
            <div className="left">
                <h5 id='para'>Tacos del Alma envisions a culinary journey that goes beyond the ordinary, delivering an experience that speaks to the soul. Rooted in a passion for authentic flavours and a commitment to quality, their aim to reduce the taco experience with a touch of artistry and hearted.</h5>
                <h5 id='para'>Mission at Tacos del Alma is to transport their customers to the vibrant streets of MExico through the art of taco-making. Their strive to create a heaven for taco enthusiasts, where each bite is a celebration of tradition , culture, and the pure joy of savoring expertly crafted flavours.</h5>
            </div>
            <div className="right">
                <h5 id='para'>Yuliia Hrabysnka 2023</h5>
            </div>
        </div>
    </div>
  )
}

export default HeroDown