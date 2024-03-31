import React from 'react';
import {motion} from 'framer-motion';

export default function CollaborateInterests() {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.15}}
    >
        <h1 className='font-acorn text-xl text-[rgb(2,90,78)] md:text-2xl lg:text-3xl md:max-w-[70%] pt-2'>
            During my downtime from coding, I found fulfillment in weightlifting and photography. 
        </h1>
        <p className='text-[rgb(76,103,99)] font-medium md:text-lg md:max-w-[70%] pt-2 text-justify'> 
            Weightlifting kept me physically active while instilling discipline and perseverance, 
            while photography allowed me to express creativity through visual storytelling. 
            These activities provided a welcomed balance to my life outside of coding.
        </p>
    </motion.div>
  )
}
