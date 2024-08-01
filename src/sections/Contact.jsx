import React from 'react'
import Jay from '../assets/imgs/contact_image2.png'
import Julieta from '../assets/imgs/contact_image1.png'
import {AnimatePresence, motion} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';

const ThankyouCard = ({handlePopup}) => {
  return (
    // black bg 
    <div className='fixed flex justify-center items-center w-full h-screen bg-black bg-opacity-70 top-0 left-0 z-50'>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          {/* <img src={Thankyou} alt="" className='z-50 grayscale dark:grayscale-0 w-[20%] min-w-[300px]' /> */}
          <div className='relative flex flex-col justify-center items-center  
                          w-[100%] p-5 -mt-20
                          md:w-[70%] md:min-w-[500px] h-[40%] bg-jt-primary-white 
                        dark:bg-jt-dark-primary-dark
                          max-w-[1000px] md:p-10'>
              {/* <IoIosClose onClick={() => handlePopup()} className='absolute right-1 top-[0px] drop-icon'/> */}
              {/* <h3>OTHER PROJECTS</h3> */}
              <p className='text-center my-10 text-lg'>Thank You for Your Interest! <br />
              I appreciate your interest in working with me! I'll be in touch shortly. <br />
              Best regards, <br />
              Talla, Jay Ray N.</p>
              <button onClick={() => handlePopup()} className='glitchhover dark:text-jt-txt-neon-green max-w-[200px] dark:border-b-jt-txt-neon-green btn-cartoon mt-5'>CLOSE</button>
          </div>
        </div>
    </div>
  )
}


const Contact = () => {
    
  return (
    <section id='contact' className='overflow-hidden flex md:flex-col items-center justify-center w-full h-fit py-10 md:py-16 bg-slate-50'>
        <div className='justify-center flex flex-col md:flex-row w-full h-fit md:h-full 5xl:w-[1950px]'>
            {/* Logos  */}
            <div className='z-20 -mb-20 md:-mb-0 md:z-0 w-full md:w-1/2 h-full flex justify-start md:justify-center items-start'>
                {/* <h2 className='text-center md:text-left w-[100%] md:w-[80%]  amatic-sc-bold txt-72 mb-5'>Projects</h2> */}
                <AnimatePresence>
                    <motion.img key={uuidv4()} initial={{x: -100}} transition={{duration: 1}} whileInView={{x: 0}} viewport={{once: true}} src={Jay} className='max-w-[500px] drop-shadow-xl object-contain md:object-left h-full w-1/2 md:w-full ' />
                </AnimatePresence>
            </div>  
            {/* Contact Form  */}
            <div className='z-10 flex flex-col gap-y-5 justify-center items-center self-center shadow-lg relative md:absolute w-full h-fit p-2 md:w-[500px] md:h-[500px] bg-white'>
                <h2 className='text-center w-[100%] md:w-[80%]  amatic-sc-bold txt-72 mb-5'>Projects</h2>
                <form className='flex flex-col gap-y-5 w-full p-5'>
                    <input type='text' required className='inp-default' placeholder='Name'></input>
                    <input type='email' required className='inp-default' placeholder='Email'></input>
                    <textarea className='inp-default' required rows={3} placeholder='Message'></textarea>
                    <button className='btnPrimary'>SEND</button>
                </form>
            </div>

            {/* List of what I Like  */}
            <div className='z-20 -mt-20 md:-mt-0 md:z-0 h-full flex justify-end md:justify-center items-start  w-full md:w-1/2'>
                <AnimatePresence>
                <motion.img key={uuidv4()} initial={{x: 100}} transition={{duration: 1}} whileInView={{x: 0}} viewport={{once: true}} src={Julieta} className='max-w-[500px] drop-shadow-xl object-contain object-right h-full w-1/2 md:w-full ' />
                </AnimatePresence>
            </div>  
        </div>
    </section>
  )
}

export default Contact