import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='absolute flex justify-center w-full h-auto p-5'>
      <div className='flex justify-between items-center w-[1250px]'>
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

        {showNav ? 
          <IoCloseOutline onClick={() => setShowNav(prev => !prev)} className='block md:hidden txt-60' /> : 
          <IoMenuOutline onClick={() => setShowNav(prev => !prev)} className='block md:hidden txt-60' />
        }

        <AnimatePresence>
          {showNav && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='overflow-y-hidden absolute block md:hidden w-1/2 h-fit p-5 bg-white shadow-xl right-5 top-24'
            >
              <ul className='flex flex-col justify-center items-center gap-y-5'>
                <Link to="home" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>Home</li></Link>
                <Link to="about" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>About Me</li></Link>
                <Link to="projects" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>Projects</li></Link>
                <Link to="blogs" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>Blogs</li></Link>
                <Link to="contact" smooth={true} duration={500}><li className='cursor-pointer amatic-sc-regular txt-32'>Contact</li></Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navigation;
