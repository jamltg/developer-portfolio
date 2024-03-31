import React from 'react'

export default function TechStack() {
  return (
    <div className='max-w-[1240px] mx-auto px-8'>
        <div className='lg:max-w-[60%]'>
            <h1 className='font-acorn text-2xl text-[rgb(2,90,78)] md:text-3xl lg:text-4xl'>My Tech Stack</h1>
            <p className='pt-4 text-[rgb(76,103,99)] font-medium md:text-lg'>
                Come check out what powers my digital playground, where creativity and practicality team up to build awesome web solutions.
            </p>
        </div>
        <div className="flex space-x-4 justify-center py-8 lg:justify-start lg:space-x-7">
            <img 
                src="https://skillicons.dev/icons?i=html" 
                alt="skill"
                className='transform hover:scale-105'
            />
            <img 
                src="https://skillicons.dev/icons?i=css" 
                alt="skill"
                className='transform hover:scale-105'
            />
            <img 
                src="https://skillicons.dev/icons?i=js" 
                alt="skill"
                className='transform hover:scale-105'
            />
            <img 
                src="https://skillicons.dev/icons?i=react" 
                alt="skill"
                className='transform hover:scale-105'
            />
            <img 
                src="https://skillicons.dev/icons?i=wordpress" 
                alt="skill"
                className='transform hover:scale-105'
            />
            <img 
                src="https://skillicons.dev/icons?i=github" 
                alt="skill"
                className='transform hover:scale-105'
            />
        </div>
    </div>
  )
}
