import React from 'react'
import Home from '../pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation;