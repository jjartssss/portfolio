import React from 'react'

const SmallCardImage = ({name, img}) => {
  return (
    <div className='w-full  xl:w-[18%]'>
        <img src={img} alt={name} className='grayscale hover:grayscale-0' />
    </div>
  )
}

export default SmallCardImage