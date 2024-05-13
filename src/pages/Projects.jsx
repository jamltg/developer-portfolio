import React from 'react'
import ProjectsTitle from '../components/ProjectsTitle'
import ProjectsCard from '../components/ProjectsCard'
import InProgressProjects from '../components/InProgressProjects'

export default function Projects() {
  return (
    <div className='bg-[rgb(237,231,222)] dark:bg-[rgb(35,56,49)] transition-colors duration-500 w-full h-auto' id="projects">
        <ProjectsTitle/>
        <ProjectsCard/>
        <InProgressProjects/>
    </div>
  )
}
