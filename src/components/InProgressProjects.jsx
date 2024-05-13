import React from 'react'
import InProgressProjectsCard from './InProgressProjectsCard'

export default function InProgressProjects() {
  return (
    <div className='max-w-[1240px] mx-auto pt-10'>
        <div className='text-center space-y-3 px-8'>
            <h2 className='font-acorn text-4xl mt-10 text-[rgb(2,90,78)] dark:text-[rgb(209,233,225)] md:text-5xl lg:text-7xl'>In Progress.</h2>
            <h1 className='font-acorn text-md text-[rgb(2,90,78)] dark:text-[rgb(209,233,225)] md:text-2xl lg:text-2xl'>Work in various states of design and development, from side projects, to in-flight product design and development.</h1>
        </div>
        <div>
          <InProgressProjectsCard/>
        </div>
    </div>
  )
}
