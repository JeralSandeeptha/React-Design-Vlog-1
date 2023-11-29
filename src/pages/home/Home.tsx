import React from 'react'
import './Home.scss';
import Hero from '../../components/hero/Hero';
import HeroDown from '../../components/hero-down/HeroDown';
import Yes from '../../components/yes-section/Yes';

const Home = () => {

  return (
    <>
      <Hero />
      <HeroDown />
      <Yes />
    </>
  );
  
}

export default Home;