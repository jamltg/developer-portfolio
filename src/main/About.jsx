import React from 'react';
import AboutText from '../components/AboutText';
import TechStack from '../components/TechStack';

export default function About() {
  return (
    <div className='bg-[rgb(237,231,222)] dark:bg-[rgb(35,56,49)] transition-colors duration-500 h-auto w-full py-8 lg:py-14' id="about">
        <AboutText/>
        <TechStack/>
    </div>
  )
}
