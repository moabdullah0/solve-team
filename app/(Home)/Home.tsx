"use client";
import React from 'react'
import HeroSection from './Herosection'
import NavbarDesktop from '@/components/Navbar';
import Services from './ServiceSection';
import Footer from './Footer/page';
import Slider from '@/components/Slider';

const HomePage = () => {
  return (
    <div>
        <NavbarDesktop/>
      <HeroSection/>
      <Services/>
      <Slider title='الفريق' />
      <Footer/>
    </div>
  )
}

export default HomePage
