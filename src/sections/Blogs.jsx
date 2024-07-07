import React from 'react'
import Sky from '../assets/imgs/sky 1.png'
import Chars from '../assets/imgs/chars.jpg'
import Scene2 from '../assets/imgs/sc2.png'
import Scene3 from '../assets/imgs/sc3.png'
import Scene4 from '../assets/imgs/sc4.png'
import BlogCard from '../components/BlogCard'
import { motion } from "framer-motion"
const Blogs = () => {

    const BlogsList = [
        {title: "Designing Characters", img: Chars, body: "Designing characters for my cartoon season 1"},
        {title: "Storyboard Scene 2", img: Scene2, body: "Making a storyboard for episode 1 scene 2"},
        {title: "Storyboard Scene 3", img: Scene3, body: "Making a storyboard for episode 1 scene 3"},
    ]

  return (
    <div className='flex flex-col items-center justify-center w-full h-fit py-10 md:py-16 bg-slate-50'>
        <div className='grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-5 w-full h-fit md:h-full 5xl:w-[1950px]'>
            {/* Logos  */}
            <motion.div initial={{opacity: 0}} transition={{duration: 1}} whileInView={{opacity: 100}} viewport={{once: true}}  className='h-fit md:h-full flex flex-col justify-center md:justify-start col-span-1 items-start md:items-start md:col-span-4 py-5 md:p-16'>
                <h2  className='text-center md:text-left w-[100%] md:w-[80%]  amatic-sc-bold txt-72 mb-5'>Projects</h2>
                {/* Blog Card  */}
                <div className='flex flex-col w-full gap-y-5 h-[80%] overflow-y-auto'>
                    {
                        BlogsList.map((blog, index) => (
                            <BlogCard key={index} img={blog.img} title={blog.title} body={blog.body}></BlogCard>
                        ))
                    }
                </div>
            </motion.div>  

            {/* List of what I Like  */}
            <div className='h-fit md:h-full flex justify-center items-start col-span-1 md:col-span-1 w-full'>
                <img src={Sky} className='object-contain object-center h-full w-full hover:grayscale-0 grayscale' />
            </div>  
        </div>
    </div>
  )
}

export default Blogs