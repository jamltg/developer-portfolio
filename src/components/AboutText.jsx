import React from 'react';
import aboutpicture from '../images/about-picture.jpg';

export default function AboutText() {
  return (
    <div className='max-w-[1240px] mx-auto p-8 flex flex-col lg:flex-row'>
        <div className= 'lg:flex lg:justify-between'>
            <div className='lg:max-w-[60%]'>
                <h1 className='font-acorn text-2xl text-[rgb(2,90,78)] md:text-3xl lg:text-4xl'>I'm a Front-End Developer</h1>
                <h1 className='font-acorn text-2xl text-[rgb(2,90,78)] md:text-3xl lg:text-4xl'>working remotely from the Philippines.</h1>
                <p className='pt-4 text-[rgb(76,103,99)] font-medium md:text-lg text-justify'>
                My expertise lies in JavaScript and React, where I specialize in building responsive and functional websites tailored 
                to the unique needs of various companies. 

                </p>
                <p className='pt-4 text-[rgb(76,103,99)] font-medium md:text-lg text-justify'>
                    With a keen eye for design and a commitment to delivering high-quality solutions, 
                    I thrive on turning ideas into interactive realities. I am eager to contribute to impactful projects 
                    and seek new opportunities to apply my skills.
                </p>
            </div>
            <div className='flex justify-center lg:max-w-[40%] pt-16 pb-8 lg:py-0'>
                <img src={aboutpicture} alt="me" className='h-30 rounded-xl h-96'></img>
            </div>
        </div>
    </div>
  )
}
