import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import {Link} from 'react-scroll';

export default function Header() {
const [isOpen, setOpen] = useState(false)

const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='bg-[rgb(237,231,222)]'>
        <div className='h-24 max-w-[1240px] mx-auto flex items-center justify-between px-8'>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>
                <h1 className='font-acorn text-xl text-[rgb(2,90,78)] md:text-3xl'>My Portfolio</h1>
            </Link>
            <ul className='hidden md:flex text-[rgb(2,90,78)]'>
                <li className='p-4'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>About</Link>
                </li>
                <li className='p-4'>
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Projects</Link>
                </li>
                <li className='p-4'>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Contact</Link>
                </li>
            </ul>
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} color="rgb(2,90,78)"/>
            </div>
        </div>
        <div>
            {isOpen && (
                <div className="flex flex-col h-auto text-[rgb(2,90,78)]">
                    <ul className="flex flex-col text-right">
                        <li className="p-4 font-medium text-xl border-b-2 border-t-2 border-[rgb(2,90,78)]">
                            <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className='pr-8 cursor-pointer'>Home</Link>
                        </li>
                        <li className="p-4 font-medium text-xl border-b-2 border-[rgb(2,90,78)]">
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='pr-8 cursor-pointer'>About</Link>
                        </li>
                        <li className="p-4 font-medium text-xl border-b-2 border-[rgb(2,90,78)]">
                            <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className='pr-8 cursor-pointer'>Projects</Link>
                        </li>
                        <li className="p-4 font-medium text-xl border-b-2 border-[rgb(2,90,78)]">
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='pr-8 cursor-pointer'>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </div>
  )
}
