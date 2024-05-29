import React from 'react'
import { RESUME } from '../constants/index'
import profilePic from '../assets/sk_1_removebg.png'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

const Hero = () => {
  return (
    

    <div id='home' className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 pt-20'>
        <div className='col-span-2 px-5 my-auto'>
        
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='pb-16 text-6xl font-mono font-thin  tracking-tight lg:mt-16
                  lg:text-8xl'>
            
            Santha Kumar
          </motion.h1>
          <h1 className='text-3xl'>
            I'm a
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='text-3xl tracking-tight text-indigo-500'>
       
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Frontend Developer'],
                autoStart: true,
                loop: true,
              }}
              />
          </motion.span>
          </h1>
          

          <motion.div 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-8'>

            <a href={RESUME} target='_blank' className='md:px-6 md:py-3 px-4 py-2 rounded-xl mr-4
              bg-gradient-to-br from-[#314462] to-indigo-500 text-white'>Download CV</a>

            <a href='mailto:savarasanthakumar20@gmail.com' className='md:px-6 md:py-3 px-4 py-2 rounded-xl  mr-4 border
              border-gray-400  text-white'>Contact Me</a>
          </motion.div>
          

        </div>
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='rounded-[50%]'
            height="100px"
            width="350px"
            src={profilePic} alt='Santha Kumar' />  
          
        </div>

            
  

    </div>


  )
}

export default Hero;
