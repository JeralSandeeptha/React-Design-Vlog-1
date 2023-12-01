import React, { useEffect } from 'react';
import './Hero.scss';
import redLogo from '../../assets/icons/logo-1.png';
import gsap from 'gsap';

type HeroProps = {};

const Hero = (props: HeroProps) => {

  useEffect( () => {
    playAnim();
  }, []);

  const playAnim = () => {
    const tl = gsap.timeline({
      paused: true,
    });
    tl.fromTo('.hero', { duration: 1.5, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' })
      .fromTo('.red-logo', { duration: 2, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' })
    tl.play();
  }

  const hoverEnterAnim = () => {
    const tl = gsap.timeline({
      paused: true,
    });
    tl.fromTo('.hero', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, { clipPath: 'polygon(9% 9%, 92% 9%, 92% 92%, 9% 92%)' })
      .fromTo('.red-logo', { y: 0}, { y: 100 });
    tl.play();
  }

  const hoverExitAnim = () => {
    const tl = gsap.timeline({
      paused: true,
    });
    tl.fromTo('.hero', { duration: 2, clipPath: 'polygon(9% 9%, 92% 9%, 92% 92%, 9% 92%)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' })
    .fromTo('.red-logo', { y: 100}, { y: 0 });
    tl.play();
  }

  return (
    <div className='hero'>
        <div className="hero-inner">
            <img src={redLogo} alt="" className='red-logo'  onMouseEnter={hoverEnterAnim} onMouseLeave={hoverExitAnim}/>
        </div>
    </div>
  );

}

export default Hero;