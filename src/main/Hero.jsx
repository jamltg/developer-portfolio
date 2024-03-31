import React from 'react';
import HeroText from '../components/HeroText';
import Blob from '../components/Blob';

export default function Hero() {
  return (
    <div className='bg-[rgb(237,231,222)] h-auto w-full' id="hero">
        <HeroText/>
        <Blob/>
    </div>
  )
}
