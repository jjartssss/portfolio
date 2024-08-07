import React from 'react'
import JayImageSide from '../assets/imgs/WEB1.png'
import Glors from '../assets/imgs/glors.png'
import { AnimatePresence, motion } from "framer-motion"
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    

  return (
    <section id="home" className='flex flex-col items-center justify-center w-full h-auto pt-32 py-10 md:py-32 bg-slate-50'>
        <div className='grid grid-cols-1 md:grid-cols-2 3xl:w-[1500px]'>
            {/* Image  */}
            <div className='flex justify-start items-center '>
                <img src={JayImageSide} className='aspect-auto w-[50%]' />
            </div>
            {/* Content  */}
            <AnimatePresence>
            <motion.div key={uuidv4()} initial={{opacity: 0}} transition={{duration: 1}} whileInView={{opacity: 100}} viewport={{once: true}} className='flex flex-col justify-center  
                            items-center mt-5
                            md:items-start md:mt-0'>
                <h2 className='text-center md:text-left amatic-sc-bold txt-72'>Hey! I’m Jay AKA JJARTS</h2>
                <h2 className='text-center md:text-left amatic-sc-bold txt-72'>Animator / Web Developer</h2>
                <p className='text-center md:text-left zen-loop-regular w-[80%] md:w-[60%] mt-5 txt-32'>Welcome to my creative space! Check out my projects, see how I work, and enjoy the art. Thanks for stopping by!</p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className='btnPrimary amatic-sc-bold txt-60 mt-5'>Hire Me</button>
                </Link>
            </motion.div>
            </AnimatePresence>
        </div>
        <div className='flex justify-center w-full h-auto'>
            <AnimatePresence>
            <motion.div key={uuidv4()} initial={{opacity: 0}} transition={{duration: 1}} whileInView={{opacity: 100}} viewport={{once: true}} className='flex mt-16 md:mt-[7rem] justify-center md:justify-end w-[90%] 3xl:w-[1500px]'>
                <img src={Glors} className='relative w-[32rem]' />
            </motion.div>
            </AnimatePresence>
        </div>
    </section>
  )
}

export default Home