import React, { useEffect } from 'react';
import './YesDownOne.scss';
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const YesDownOne = () => {

  const textReveal = () => {
    gsap.fromTo(
      '.para',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.para',
          start: 'top 90%',
          scrub: false,
        },
      }
    );
  }

  const revealAnim = () => {
    gsap.fromTo(
      '.yes-down',
      { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
      {
        clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
        scrollTrigger: {
          trigger: '.yes-down',
          start: 'top 70%',
          scrub: false,
        },
      }
    );
  };

  useEffect( () => {
    revealAnim();
    textReveal();
  }, []);

  return (
    <div className='yes-down'>
      <div className="yes-down-inner">
        <h5 className='para'>The primary typeface for Tacos del Alma is "Cuuioolo" is a font that effortlessly marries with a touch of medernity. It's graceful curves and slightly rounded edges evoke a sense of handmade craftmanship, aligning perfectly with the artisanal nature or our tacos.</h5>
        <h5 className='para'>Complementing Cucciolo, the secondary typeface for Tacos del Alma is "Mytupi". Mytupi brings a modern and dynamic vibe to their brand. It's clean line and contempory aesthetics make it an excellent choice for secondary text providing a fresh contrasy while maintaining readability.</h5>
      </div>
    </div>
  );

}

export default YesDownOne