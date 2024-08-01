import React, { useEffect, useState } from 'react'
import Sky from '../assets/imgs/sky 1.png'
import Chars from '../assets/imgs/chars.jpg'
import Scene2 from '../assets/imgs/sc2.png'
import Scene3 from '../assets/imgs/sc3.png'
import Scene4 from '../assets/imgs/sc4.png'
import BlogCard from '../components/BlogCard'
import { AnimatePresence, motion } from "framer-motion"
import { v4 as uuidv4 } from 'uuid';
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../auth/firebase/firebaseConfig'

const Blogs = () => {

    const [projects, setProjects] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Real-time listener
        const q = collection(db, 'projects');
        const unsubscribe = onSnapshot(q,
        (querySnapshot) => {
            const projectsData = querySnapshot.docs.map(doc =>( {id:doc.id, ...doc.data()}));
            setProjects(projectsData);
        },
        (err) => {
            console.error("Error fetching projects: ", err);
            setError("Failed to load projects.");
        }
        );

        // Cleanup function to unsubscribe from the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    

  return (
    <section id='blogs' className='flex flex-col items-center justify-center w-full h-fit md:h-screen py-10 md:py-16 bg-slate-50'>
        <div className='grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-5 w-full h-fit md:h-full 5xl:w-[1950px]'>
            {/* Logos  */}
            <AnimatePresence>
                <motion.div key={uuidv4()} initial={{opacity: 0}} transition={{duration: 1}} whileInView={{opacity: 100}} viewport={{once: true}}  className='h-fit md:h-full flex flex-col justify-center md:justify-start col-span-1 items-start md:items-start md:col-span-4 py-5 md:p-16'>
                    <h2  className='text-center md:text-left w-[100%] md:w-[80%]  amatic-sc-bold txt-72 mb-5'>Projects</h2>
                    {/* Blog Card  */}
                    <div className='flex flex-col w-full gap-y-5 h-[80%] overflow-y-auto'>
                        {
                            projects.map((proj, index) => (
                                <BlogCard key={index} projectID={proj.id} img={proj.imageURL} title={proj.title} body={proj.desc}></BlogCard>
                            ))
                        }
                    </div>
                </motion.div>     
            </AnimatePresence> 

            {/* List of what I Like  */}
            <div className='h-fit md:h-full flex justify-center items-start col-span-1 md:col-span-1 w-full'>
                <img src={Sky} className='object-contain object-center h-full w-full hover:grayscale-0 grayscale' />
            </div>  
        </div>
    </section>
  )
}

export default Blogs