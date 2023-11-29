import React from 'react'
import './Home.scss';
import Hero from '../../components/hero/Hero';
import HeroDown from '../../components/hero-down/HeroDown';
import Yes from '../../components/yes-section/Yes';
import YesDownOne from '../../components/yes-down/YesDownOne';
import Bg from '../../components/bg/Bg';
import BgDown from '../../components/bg-down/BgDown';
import Status from '../../components/status/Status';
import Bag from '../../components/bag/Bag';
import Contact from '../../components/contact/Contact';
import StatusDown from '../../components/status-down/StatusDown';
import Footer from '../../components/footer/Footer';

const Home = () => {

  return (
    <>
      <Hero />
      <HeroDown />
      <Yes />
      <YesDownOne />
      <Bg />
      <BgDown />
      <Status />
      <StatusDown />
      <Bag />
      <Contact />
      <Footer />
    </>
  );
  
}

export default Home;