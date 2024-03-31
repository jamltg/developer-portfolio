import React from 'react';
import {motion} from 'framer-motion';

export default function CollaborateEducation() {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.15}}        
    >
        <h1 className='font-acorn text-xl text-[rgb(2,90,78)] md:text-2xl lg:text-3xl md:w-[85%] lg:w-[80%] pt-2'>
            I hold a Bachelor's degree in Computer Science from Notre Dame of Dadiangas University.
        </h1>
        <p className='text-[rgb(76,103,99)] font-medium md:text-lg md:w-[85%] lg:w-[90%] pt-2 text-justify'> 
            Throughout my academic journey, I dedicated myself to gaining a comprehensive understanding of key computer 
            science concepts, including data structures, algorithms, and software engineering principles. 
        </p>
        <p className='text-[rgb(76,103,99)] font-medium md:text-lg md:w-[85%] lg:w-[90%] pt-2 text-justify'>
            My journey in learning extended beyond graduation. I pursued additional online courses to enhance my 
            skills as a web developer. These courses provided me with deeper insights into various programming 
            languages tailored for web development.
        </p>
    </motion.div>
  )
}
