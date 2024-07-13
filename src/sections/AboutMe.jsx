import React from 'react'
import PS from '../assets/logos/logo-photoshop.png'
import PR from '../assets/logos/logo-premiere.png'
import AE from '../assets/logos/logo-aftereffects.png'
import AN from '../assets/logos/logo-animate.png'
import Godot from '../assets/logos/logo-godot.png'
import Toonboom from '../assets/logos/logo-toonboom.png'
import Medibang from '../assets/logos/logo-medibang.png'
import ReactJS from '../assets/logos/logo-reactjs.png'
import Blender from '../assets/logos/logo-blender.png'
import LogoCard from '../components/LogoCard'
// IMAGES
import { v4 as uuidv4 } from 'uuid';

import AB1 from '../assets/imgs/ab1.png'
import AB2 from '../assets/imgs/ab2.png'
import AB3 from '../assets/imgs/ab3.png'
import AB4 from '../assets/imgs/ab4.png'
import AB5 from '../assets/imgs/ab5.png'
import AB6 from '../assets/imgs/ab6.png'
import SmallCardImage from '../components/SmallCardImage'
import { AnimatePresence, motion } from "framer-motion"
const AboutMe = () => {

    const LogoList = [
        {name: 'Adobe Animate', img: AN},
        {name: 'Adobe After Effects', img: AE},
        {name: 'Adobe Photoshop', img: PS},
        {name: 'Adobe Premiere', img: PR},
        {name: 'Toonboom Harmony', img: Toonboom},
        {name: 'Medibang Paint Pro', img: Medibang},
        {name: 'Blender', img: Blender},
        {name: 'React JS', img: ReactJS},
        {name: 'Godot', img: Godot},
    ]

    const ImageCarousel = [
        {name: 'Loved to Animate', img: AB1},
        {name: 'Loved to play Basketball', img: AB2},
        {name: 'Loved to Eat', img: AB3},
        {name: 'Loved to Code', img: AB4},
        {name: 'Loved cat and dogs', img: AB5},
        {name: 'Loved to play and make games', img: AB6},
    ]

  return (
    <section id='about' className='flex flex-col items-center justify-center w-full h-fit py-10 md:py-16 bg-slate-50'>
        <AnimatePresence>
            <motion.h2 key={uuidv4()} initial={{opacity: 0}} transition={{duration: 1}} whileInView={{opacity: 100}} viewport={{once: true}} className='text-center md:text-left amatic-sc-bold txt-72 mb-5'>About Me</motion.h2>
            <motion.p key={uuidv4()} initial={{opacity: 0}} transition={{duration: 1.5}} whileInView={{opacity: 100}} viewport={{once: true}} className='zen-loop-regular text-center w-[80%] md:w-[60%] mt-5 txt-32'>I'm passionate about bringing ideas to life through animation, illustration, and web design. I use tools like Adobe Animate, Toon Boom Harmony, Photoshop, After Effects, and Premiere to create engaging animations. For illustrations, Medibang Paint Pro is my go-to.</motion.p>
            <motion.p key={uuidv4()} initial={{opacity: 0}} transition={{duration: 2}} whileInView={{opacity: 100}} viewport={{once: true}} className='zen-loop-regular text-center w-[80%] md:w-[60%] mt-5 txt-32'>In web development, I build dynamic websites with React.js, focusing on user-friendly and visually appealing designs. Occasionally, I also dive into game development, blending my animation and coding skills to create interactive experiences.</motion.p>
        </AnimatePresence>
        {/* Logos  */}
        <div className='flex overflow-hidden gap-x-3 gap-y-3 md:gap-x-5 justify-center w-full flex-wrap mt-16 h-fit'>
            {
                LogoList.map((logo, index) => (
                    <LogoCard key={index} name={logo.name} img={logo.img}></LogoCard>
                ))
            }
        </div>  

        {/* List of what I Like  */}
        <div className='flex justify-center w-full  mt-16 h-fit'>
            <div className='grid grid-cols-2 md:flex w-full 5xl:w-[1250px]'>
                {
                    ImageCarousel.map((image, index) => (
                        <SmallCardImage key={index} name={image.name} img={image.img}></SmallCardImage>
                    ))
                }
            </div>
        </div>  
    </section>
  )
}

export default AboutMe