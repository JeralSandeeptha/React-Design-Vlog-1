import React, { useEffect } from 'react';
import './Yes.scss';
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import yellowLogo from '../../assets/icons/logo-2.png';

gsap.registerPlugin(ScrollTrigger);

const Yes = () => {

    const revealAnimOne = () => {
        gsap.fromTo(
          '.yes-inner .left .up',
          { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
          {
            clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
            scrollTrigger: {
              trigger: '.yes-inner .left .up',
              start: 'top 70%',
              scrub: false,
            },
          }
        );
    };

    const revealAnimThree = () => {
        gsap.fromTo(
          '.yes-inner .right',
          { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
          {
            clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
            scrollTrigger: {
              trigger: '.yes-inner .right',
              start: 'top 70%',
              scrub: false,
            },
          }
        );
    };

    const revealAnimTwo = () => {
        gsap.fromTo(
            '.yes-inner .left .down',
            { duration: 2, clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)' },
            {
              clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
              scrollTrigger: {
                trigger: '.yes-inner .left .down',
                start: 'top 80%',
                scrub: false,
              },
            }
        )
        
        gsap.fromTo(
            '.yes-inner .left .down .header',
            { duration: 2, y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.yes-inner .left .down .header',
                    start: 'top 80%',
                    scrub: false,
                },
            }
        )
    }

    useEffect( () => {
        revealAnimOne();
        revealAnimTwo();
        revealAnimThree();
    }, []);

  return (
    <div className='yes'>
        <div className="yes-inner">
            <div className="left">
                <div className="up"></div>
                <div className="down">
                    <h1 className='header'>SAY TACO</h1>
                    <h1 className='header'>YES!</h1>
                </div>
            </div>
            <div className="right">
                <img className='yellowLogo' src={yellowLogo} alt="" />
            </div>
        </div>
    </div>
  );

}

export default Yes