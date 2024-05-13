import React from 'react';
import HeroText from '../components/HeroText';
import Blob from '../components/Blob';

export default function Hero() {
  return (
    <div className='bg-[rgb(237,231,222)] h-auto w-full dark:bg-[rgb(35,56,49)] transition-colors duration-500' id="hero">
        <HeroText/>
        <Blob/>
    </div>
  )
}
