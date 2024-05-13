import React, { useEffect, useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import {Link as RouterLink} from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export default function Header() {
const [isOpen, setOpen] = useState(false);
const [theme, setTheme] = useState('light')

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add("dark");
    } else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='bg-[rgb(237,231,222)] dark:bg-[rgb(35,56,49)] transition-colors duration-500'>
        <div className='h-24 max-w-[1240px] mx-auto flex items-center justify-between px-8'>
            <RouterLink to="/developer-portfolio" className='cursor-pointer'>
                <h1 className='font-acorn text-xl text-[rgb(2,90,78)] dark:text-[rgb(209,233,225)] md:text-3xl'>My Portfolio</h1>
            </RouterLink>
            <div className='flex items-center'>
                <ul className='hidden md:flex text-[rgb(2,90,78)] dark:text-[rgb(209,233,225)]'>
                    <li className='p-4'>
                        <RouterLink to="/developer-portfolio/about" className='cursor-pointer'>About</RouterLink>
                    </li>
                    <li className='p-4'>
                        <RouterLink to="/developer-portfolio/projects" className='cursor-pointer'>Projects</RouterLink>
                    </li>
                </ul>
                <div className='px-1 py-4'>
                    {theme === 'light' ? <IoSunny onClick={handleThemeSwitch} size={26} color="rgb(2,90,78)"/> : <IoMoon size={26} onClick={handleThemeSwitch} color="rgb(209,233,225)"/>}
                </div>
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} color={theme === 'light' ? 'rgb(2,90,78)' : 'rgb(209,233,225)'}/>
                </div>
            </div>
        </div>
        <div>
            {isOpen && (
                <div className="flex flex-col h-auto text-[rgb(2,90,78)]">
                    <ul className="flex flex-col text-right">
                        <li className="p-4 font-medium text-xl border-y-2 border-[rgb(2,90,78)] dark:border-[rgb(209,233,225)] dark:text-[rgb(209,233,225)]">
                            <RouterLink to="/developer-portfolio/about" className='pr-8 cursor-pointer'>About</RouterLink>
                        </li>
                        <li className="p-4 font-medium text-xl border-b-2 border-[rgb(2,90,78)] dark:border-[rgb(209,233,225)] dark:text-[rgb(209,233,225)]">
                            <RouterLink to="/developer-portfolio/projects" className='pr-8 cursor-pointer'>Projects</RouterLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </div>
  )
}
