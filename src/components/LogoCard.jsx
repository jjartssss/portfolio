import React from 'react'

const LogoCard = ({name, img}) => {
  return (
    <div>
        <img src={img} title={name} alt={name} className=' w-[55px] duration-150 ease-in-out hover:scale-105 md:w-[55px]'/>
    </div>
  )
}

export default LogoCard