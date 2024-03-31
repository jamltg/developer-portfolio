import React from 'react';
import { motion } from "framer-motion"
import DeviceMockup from './DeviceMockup';
import projectsData from '../data/projectsData.json';
import "../index.css";

export default function ProjectsCard() {

    

  return (
    <div className='max-w-[1240px] mx-auto px-8 py-10'>
        <div className='flex flex-col space-y-4 projectscard:flex-row projectscard:space-y-0 projectscard:space-x-4'>   
                {projectsData.firstrow.map((project,index)=>(
                    <div className='flex-grow'>
                        <motion.div
                            key={index}
                            className={project.className}
                            whileHover={{y:-10}}
                            whileTap={{x:-10}}
                        >
                            <div>
                                <p className='text-right tracking-wider text-[rgb(54,68,66)]'>{project.subtitle}</p>
                                <h1 className='text-right font-acorn text-xl text-[rgb(54,68,66)] md:text-2xl lg:text-3xl'>{project.title}</h1>
                            </div>
                            <div className='pt-4'>
                                <DeviceMockup imagePath={project.imagePath}/>
                            </div>
                            <div className='pt-4 space-x-4 flex flex-row justify-center'>
                                <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium' onClick={()=>window.open(project.githubUrl,'_blank')}>Code</button>
                                <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium' onClick={()=>window.open(project.liveUrl,'_blank')}>Live</button>
                            </div>
                        </motion.div>
                    </div>
                ))} 
        </div>
        <div className='flex flex-col space-y-4 projectscard:flex-row projectscard:space-y-0 pt-4 projectscard:space-x-4'>   
                {projectsData.secondrow.map((project,index)=>(
                    <div className='flex-grow space-y-4'>
                        <motion.div
                            key={index}
                            className={project.className}
                            whileHover={{y:-10}}
                            whileTap={{x:-10}}
                        >
                            <div>
                                <p className='text-right tracking-wider text-[rgb(54,68,66)]'>{project.subtitle}</p>
                                <h1 className='text-right font-acorn text-xl text-[rgb(54,68,66)] md:text-2xl lg:text-3xl'>{project.title}</h1>
                            </div>
                            <div className='pt-4'>
                                <DeviceMockup imagePath={project.imagePath}/>
                            </div>
                            <div className='pt-4 space-x-4 flex flex-row justify-center'>
                                <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium' onClick={()=>window.open(project.githubUrl,'_blank')}>Code</button>
                                <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium' onClick={()=>window.open(project.liveUrl,'_blank')}>Live</button>
                            </div>
                        </motion.div>
                    </div>
                ))} 
        </div>
    </div>
    // <div className='max-w-[1240px] mx-auto px-8 py-10'>
    //     <div className='flex flex-col space-y-4 md:flex md:flex-col projectscard:flex-row md:space-x-4 md:space-y-0'>
    //         <div className='flex-grow space-y-4'>   
    //             <motion.div 
    //                 className="bg-[rgb(208,148,229)] p-8 rounded-xl"
    //                 whileHover={{y:-10}}
    //                 whileTap={{x:-10}}
    //             >
    //                 <div> 
    //                     <p className='text-right tracking-wider text-[rgb(54,68,66)]'>RESTAURANT WEBSITE</p>
    //                     <h1 className='text-right font-acorn text-xl text-[rgb(54,68,66)] md:text-2xl lg:text-3xl'>Tabemono</h1>
    //                 </div>
    //                 <div className='pt-4'>
    //                     <DeviceMockup/>
    //                 </div>
    //                 <div className='pt-4 space-x-4 flex flex-row justify-center'>
    //                     <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium'>Code</button>
    //                     <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium'>Live</button>
    //                 </div>
    //             </motion.div>
    //             <motion.div 
    //                 className="bg-[rgb(232,184,156)] p-8 rounded-xl"
    //                 whileHover={{y:-10}}
    //                 whileTap={{x:-10}}
    //             >
    //                 <div>
    //                     <p className='text-right tracking-wider text-[rgb(54,68,66)]'>SCHOOL WEBSITE</p>
    //                     <h1 className='text-right font-acorn text-xl text-[rgb(54,68,66)] md:text-2xl lg:text-3xl'>NDDU</h1>
    //                 </div>
    //                 <div className='pt-4'>
    //                     <DeviceMockup/>
    //                 </div>
    //                 <div className='pt-4 space-x-4 flex flex-row justify-center'>
    //                     <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium'>Code</button>
    //                     <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium'>Live</button>
    //                 </div>
    //             </motion.div>
    //         </div>        
    //         <div className='flex-grow space-y-4'>
    //             <motion.div 
    //                 className='bg-[rgb(183,224,255)] p-8 rounded-xl'
    //                 whileHover={{y:-10}}
    //                 whileTap={{x:-10}}
    //             >
    //                 <div>   
    //                     <p className='text-right tracking-wider text-[rgb(54,68,66)]'>BANKING WEBSITE</p>
    //                     <h1 className='text-right font-acorn text-xl text-[rgb(54,68,66)] md:text-2xl lg:text-3xl'>Lorem Ipsum</h1>
    //                 </div>
    //                 <div className='pt-4'>
    //                     <DeviceMockup/>
    //                 </div>
    //                 <div className='pt-4 space-x-4 flex flex-row justify-center'>
    //                     <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium'>Code</button>
    //                     <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium'>Live</button>
    //                 </div>
    //             </motion.div>
    //             <motion.div className="bg-[rgb(153,223,213)] p-8 rounded-xl"
    //                 whileHover={{y:-10}}
    //                 whileTap={{x:-10}}
    //             >
    //                 <div>   
    //                     <p className='text-right tracking-wider text-[rgb(54,68,66)]'>MOVIE RATING WEBSITE</p>
    //                     <h1 className='text-right font-acorn text-xl text-[rgb(54,68,66)] md:text-2xl lg:text-3xl'>Lorem Ipsum</h1>
    //                 </div>
    //                 <div className='pt-4'>
    //                     <DeviceMockup/>
    //                 </div>
    //                 <div className='pt-4 space-x-4 flex flex-row justify-center'>
    //                     <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium'>Code</button>
    //                     <button className='border-2 border-[rgb(54,68,66)] rounded-lg py-2 px-4 hover:bg-[rgb(54,58,66)] hover:text-white transition-colord duration-300 delay-100 font-medium'>Live</button>
    //                 </div>
    //             </motion.div>
    //         </div>
    //     </div>
    // </div>
  )
}