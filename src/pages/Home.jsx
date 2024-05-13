import React from 'react'
import Hero from "../main/Hero.jsx";
import About from "../main/About.jsx";
import Projects from "../main/Projects.jsx";
import Contact from "../main/Contact.jsx";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      {/* <Collaborate/> */}
      <Contact/>
    </div>
  )
}
