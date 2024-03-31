import React from 'react';
import AboutText from '../components/AboutText';
import TechStack from '../components/TechStack';
import CollaborateTab from '../components/CollaborateTab';

export default function About() {
  return (
    <div className='bg-[rgb(237,231,222)] h-auto w-full py-8 lg:py-14' id="about">
        <AboutText/>
        <TechStack/>
        <CollaborateTab/>
    </div>
  )
}
