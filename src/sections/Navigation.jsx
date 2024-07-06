import React from 'react'

const Navigation = () => {
  return (
    <div className='absolute flex justify-center w-full h-auto p-5'>
        <div className='flex justify-between w-[1250px]'>
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

export default Navigation