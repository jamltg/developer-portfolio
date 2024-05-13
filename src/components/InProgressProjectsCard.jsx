import React from 'react';
import { motion } from "framer-motion"
import inProgressProjectsData from '../data/inProgressProjectsData.json';
import "../index.css";
import InProgressDeviceMockup from './InProgressDeviceMockup';

export default function InProgressProjectsCard() {
  return (
    <div>
      <div className='max-w-[1240px] mx-auto px-8 py-10'>
        <div className='flex flex-col space-y-4 projectscard:flex-row projectscard:space-y-0 projectscard:space-x-4'>   
                {inProgressProjectsData.firstrow.map((project,index)=>(
                    <div className='flex-grow'>
                        <motion.div
                            key={index}
                            className='bg-[rgb(245,245,247)] p-8 rounded-xl box-shadow-bottom'
                            whileHover={{y:-10}}
                            whileTap={{x:-10}}
                        >
                            <div>
                                <p className='text-right tracking-wider text-[rgb(54,68,66)]'>{project.subtitle}</p>
                                <h1 className='text-right font-acorn text-xl text-[rgb(54,68,66)] md:text-2xl lg:text-3xl'>{project.title}</h1>
                            </div>
                            <div className='pt-4'>
                                <InProgressDeviceMockup imagePath={project.imagePath}/>
                            </div>
                        </motion.div>
                    </div>
                ))} 
        </div>
      </div>
    </div>
  )
}
