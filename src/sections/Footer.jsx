import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-slate-900 h-fit pt-10  md:py-16 bg-slate-50'>
        <div className='flex gap-y-5 flex-col justify-center items-center text-white pb-32 xl:w-[1250px]'>
            <p className='amatic-sc-regular txt-60'>
                JJARTS
            </p>
            
            <ul className='hidden md:flex justify-center items-center gap-x-5'>
                <li className='amatic-sc-regular txt-32'>Home</li>
                <li className='amatic-sc-regular txt-32'>About Me</li>
                <li className='amatic-sc-regular txt-32'>Projects</li>
                <li className='amatic-sc-regular txt-32'>Blogs</li>
                <li className='amatic-sc-regular txt-32'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer