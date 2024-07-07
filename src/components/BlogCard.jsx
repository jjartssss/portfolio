import React from 'react'

const BlogCard = ({title, body, img}) => {
  return (
    <div className='flex justify-start items-center gap-x-10 w-full h-fit hover:bg-slate-200 p-[20px]'>
        <img src={img} className='min-w-[120px] w-[120px] h-[120px] object-cover md:min-w-[200px] md:w-[200px] md:h-[200px] bg-red-950'/>
        {/* Content  */}
        <div className='w-full'>
            <h3 className='text-center md:text-left w-[100%] md:w-[80%]  amatic-sc-bold txt-60 mb-5'>{title}</h3>
            <p className='zen-loop-regular text-center md:text-left w-[100%]  mt-5 txt-32'>{body}</p>
        </div>
    </div>
  )
}

export default BlogCard