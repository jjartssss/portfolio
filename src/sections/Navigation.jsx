import React from 'react'
import {Link} from 'react-scroll'
const Navigation = () => {
  return (
    <div className='absolute flex justify-center w-full h-auto p-5'>
        <div className='flex justify-between w-[1250px]'>
            <p className='amatic-sc-regular txt-60'>
                JJARTS
            </p>
            
            <ul className='hidden md:flex justify-center items-center gap-x-5'>
                <Link to="home" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>Home</li></Link>
                <Link to="about" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>About Me</li></Link>
                <Link to="projects" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>Projects</li></Link>
                <Link to="blogs" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>Blogs</li></Link>
                <Link to="contact" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navigation