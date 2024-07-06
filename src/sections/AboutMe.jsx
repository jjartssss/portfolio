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

  return (
    <div className='flex flex-col items-center justify-center w-full h-auto py-10 md:py-32 bg-slate-50'>
        <h2 className='text-center md:text-left amatic-sc-bold txt-72 mb-5'>About Me</h2>
        <p className='zen-loop-regular text-center w-[80%] md:w-[60%] mt-5 txt-32'>I'm passionate about bringing ideas to life through animation, illustration, and web design. I use tools like Adobe Animate, Toon Boom Harmony, Photoshop, After Effects, and Premiere to create engaging animations. For illustrations, Medibang Paint Pro is my go-to.</p>
        <p className='zen-loop-regular text-center w-[80%] md:w-[60%] mt-5 txt-32'>In web development, I build dynamic websites with React.js, focusing on user-friendly and visually appealing designs. Occasionally, I also dive into game development, blending my animation and coding skills to create interactive experiences.</p>

        {/* Logos  */}
        <div className='flex overflow-hidden gap-x-3 gap-y-3 md:gap-x-5 justify-center w-full flex-wrap mt-16 h-auto'>
            {
                LogoList.map((logo, index) => (
                    <LogoCard name={logo.name} img={logo.img}></LogoCard>
                ))
            }
        </div>  

        {/* List of what I Like  */}
        <div className='w-full bg-slate-300 mt-16 h-32'>
        </div>  
    </div>
  )
}

export default AboutMe