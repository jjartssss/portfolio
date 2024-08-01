import React from 'react'

const BlogCard = ({title, body, img, projectID}) => {

  const ViewComic = () => {
      window.open(`https://webcom-endp.onrender.com/user/project/${projectID}`, "_blank");
  }
  
  return (
    <div className='flex flex-col md:flex-row justify-start items-center gap-x-10 w-full h-fit hover:bg-slate-200 p-[20px]'>
        <img src={img} className='min-w-[120px] w-[120px] h-[120px] object-cover md:min-w-[200px] md:w-[200px] md:h-[200px] bg-red-950'/>
        {/* Content  */}
        <div className='w-full'>
            <h3 className='text-center md:text-left w-[100%] md:w-[80%]  amatic-sc-bold txt-60 mb-5'>{title}</h3>
            <p className='zen-loop-regular text-center md:text-left w-[100%]  mt-5 txt-32'>{body}</p>
        </div>
        <button onClick={() => ViewComic()} className='btnPrimary'>VIEW</button>
    </div>
  )
}

export default BlogCard