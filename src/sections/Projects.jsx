import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import AB1 from '../assets/imgs/p1.png'
import AB2 from '../assets/imgs/p2.png'
import AB3 from '../assets/imgs/p3.png'
import AB4 from '../assets/imgs/ab4.png'
import AB5 from '../assets/imgs/ab5.png'
import AB6 from '../assets/imgs/ab6.png'
import SmallCardImage from '../components/SmallCardImage'
import BigCardImage from '../components/BigCardImage'
import Photobash from '../assets/imgs/photobashing.png'
import { AnimatePresence, motion } from "framer-motion"
import ProjectCard from '../components/ProjectCard';
const Projects = () => {

    const ImageCarousel = [
        {name: 'JJARTS PORTFOLIO', img: AB1, githubLink: 'https://github.com/jjartssss/portfolio', websiteLink: 'https://jaytalla.github.io/jt-portfolio/'},
        {name: 'JAY PORTFOLIO', img: AB2, githubLink: 'https://github.com/jaytalla/jt-portfolio', websiteLink: 'https://jaytalla.github.io/jt-portfolio/'},
        {name: 'WEBCOM', img: AB3, githubLink: 'https://github.com/jjartssss/WebCom', websiteLink: 'https://webcom-endp.onrender.com/'},
    ]


  return (
    <section id='projects' className='flex flex-col items-center justify-center w-full h-fit py-10 md:py-16 bg-slate-50'>
        
        <div className='grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-5 w-full h-full 5xl:w-[1950px]'>
            {/* Logos  */}
            <div className='col-span-1 md:col-span-1 bg-red-200 h-full w-full'>
                <img src={Photobash} className='object-cover object-center h-full' />
            </div>  

            {/* List of what I Like  */}
            <AnimatePresence>
            <motion.div key={uuidv4()} initial={{opacity: 0}} transition={{duration: 1}} whileInView={{opacity: 100}} viewport={{once: true}} 
            className='flex flex-col justify-center md:justify-start col-span-1 items-start md:items-start md:col-span-4 py-5 md:p-16'>
                <h2 className='text-center md:text-left w-[100%] md:w-[80%]  amatic-sc-bold txt-72 mb-5'>Projects</h2>
                <p className='zen-loop-regular text-center md:text-left w-[100%] md:w-[80%] mt-5 txt-32'>Welcome to my project showcase! Here, you'll find a mix of my favorite works in animation, web development, game dev, and more.</p>
                <p className='zen-loop-regular text-center md:text-left w-[100%] md:w-[80%] mt-5 txt-32'>I bring stories to life with dynamic animations using tools like Adobe Animate, Toon Boom Harmony, Photoshop, After Effects, and Premiere.</p>
                <p className='zen-loop-regular text-center md:text-left w-[100%] md:w-[80%] mt-5 txt-32'>Check out my unique illustrations and character designs created with Medibang Paint Pro.</p>
                <p className='zen-loop-regular text-center md:text-left w-[100%] md:w-[80%] mt-5 txt-32'>I also dive into game development, blending animation and coding for immersive experiences.</p>
                
                <div className='grid grid-cols-1 p-5 md:p-0 md:grid-cols-3 
                gap-y-12 md:gap-y-0
                gap-x-5 w-[100%] md:w-[80%] mt-5 5xl:w-[1250px]'>
                    {
                        ImageCarousel.map((image, index) => (
                            // <BigCardImage key={index} name={image.name} img={image.img}></BigCardImage>
                            <ProjectCard key={index} githubLink={image.githubLink} siteLink={image.websiteLink} image={image.img} title={image.name}  ></ProjectCard>
                        ))
                    }
                </div>
            </motion.div>  
            </AnimatePresence>
        </div>
    </section>
  )
}

export default Projects