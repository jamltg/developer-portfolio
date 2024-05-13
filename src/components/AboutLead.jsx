import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import leadpicture from '../images/MNT-110.jpg'
export default function AboutLead() {

    const handleDownload = () => {
        // Create a link and set the URL to the path of your resume PDF
        const link = document.createElement("a");
        link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
        // Set the download attribute to the desired file name
        link.download = "Letigio_Resume.pdf";
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger click
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
      };

  return (
    <div className='max-w-[1240px] mx-auto p-8'>
        <h1 className='font-acorn text-5xl text-center text-[rgb(2,90,78)] md:text-6xl lg:text-7xl dark:text-[rgb(209,233,225)]'>I'm Jam.</h1>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='flex justify-center items-center pt-10'>
                <img src={leadpicture} alt="jam" className='h-72 md:h-96 obj-contain rounded-xl'/>
            </div>
            <div className='md:w-[60%] md:pl-8 pt-10 md:pt-0'>
                <h1 className='font-acorn text-2xl text-[rgb(2,90,78)] dark:text-[rgb(209,233,225)] md:text-3xl lg:text-4xl'>I'm a Front-End Developer working remotely from the Philippines.</h1>
                <p className='pt-4 text-[rgb(76,103,99)] dark:text-[rgb(176,200,191)] font-medium md:text-lg text-justify'>My expertise lies in JavaScript and React, where I specialize in building responsive and functional websites tailored to the unique needs of various companies.</p>
                <p className='pt-4 text-[rgb(76,103,99)] dark:text-[rgb(176,200,191)] font-medium md:text-lg text-justify'>With a keen eye for design and a commitment to delivering high-quality solutions, I thrive on turning ideas into interactive realities. I am eager to contribute to impactful projects and seek new opportunities to apply my skills.</p>
                <div className='flex justify-center md:justify-start mt-6'>
                    <button 
                        onClick={handleDownload} 
                        className='bg-[rgb(2,90,78)] px-4 py-4 rounded-xl flex items-center gap-2'
                    >
                        <span className='text-white'>Download my Resume</span>
                        <FaRegFileAlt color="white" size={20}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
