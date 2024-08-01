import React from 'react'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-slate-900 h-fit pt-10  md:py-16 bg-slate-50'>
        <div className='flex gap-y-5 flex-col justify-center items-center text-white pb-32 xl:w-[1250px]'>
            <Link to="home" smooth={true} duration={500}>
              <p className='amatic-sc-regular txt-60'>
                  JJARTS
              </p>
            </Link>
            
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

export default Footer