import React from 'react';
import ProjectsCard from '../components/ProjectsCard';
import ProjectsTitle from '../components/ProjectsTitle';

export default function Projects () {
  return (
    <div className='bg-[rgb(237,231,222)] dark:bg-[rgb(35,56,49)] transition-colors duration-500 w-full h-auto' id="projects">
        <ProjectsTitle/>
        <ProjectsCard/>
    </div>
  )
}
