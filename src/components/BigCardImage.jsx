import React from 'react'

const BigCardImage = ({img, name}) => {
  return (
    <div className='w-full'>
        <img src={img} alt={name} className='grayscale hover:grayscale-0' />
    </div>
  )
}

export default BigCardImage