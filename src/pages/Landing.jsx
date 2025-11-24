import React from 'react'
import { Hero } from '../componets'
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const Landing = () => {
  return (
    <>
    <Hero/>
    <img src={hero1} alt="" />
    </>
  )
}

export default Landing