import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
const ProjectCard = ({title,siteLink, githubLink, image}) => {

    const ViewSite = (link) => {
        window.open(link, "_blank");
    }

  return (
    <div className=' w-fit min-w-[200px] h-full'>
        <img src={image} className='w-full h-full object-fill'/>
        <div className='flex gap-x-5 text-4xl'>
            <FaGithub className='cursor-pointer' onClick={() => ViewSite(githubLink)} title='View Source Code'></FaGithub>
            <FaGlobeAmericas className='cursor-pointer' onClick={() => ViewSite(siteLink)} title='View Website'></FaGlobeAmericas>
        </div>
    </div>
  )
}

export default ProjectCard