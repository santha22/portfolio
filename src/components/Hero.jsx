import React from 'react'
import { HERO_CONTENT, RESUME } from '../constants/index'
// import profilePic from "../assets/santha kumar.jpg"
import profilePic from '../assets/sk_1_removebg.png'
// import profilePic from "../assets/santha_kumar-bg.png"
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
    

    <div id='home' className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 '>
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
            {/* <button
              className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
                                my-2 max-w-xl tracking-tighter'><a href={RESUME} target='_blank'>Download Resume</a></button> */}
          </motion.div>
          


            {/* <motion.button
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='bg-blue-600 hover:bg-transparent text-white font-semibold hover:text-white  py-2 px-4 hover:border hover:border-blue-500  md:ml-8 rounded md:static my-2 max-w-xl tracking-tighter'>Contact Me</motion.button> */}

          {/* <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500
                  to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
            
            Full Stack Developer
            
          </motion.span> */}
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

            
          
        

        {/* <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            
          </div>
        </div> */}

    </div>


    // <div id='home' className='w-full md:ml-16 lg:ml-16 ml-1 border-b border-neutral-900 pb-4 lg:mb-35'>
    //   <div className='flex flex-wrap'>
    //     <div className='w-full lg:w-1/2'>
    //       <motion.h1
    //         variants={container(0)}
    //         initial="hidden"
    //         animate="visible"
    //         className='pb-16 text-6xl font-mono font-thin  tracking-tight lg:mt-16
    //               lg:text-8xl'>
            
    //         Santha Kumar
    //       </motion.h1>

    //       <motion.span
    //         variants={container(0.5)}
    //         initial="hidden"
    //         animate="visible"
    //         className='text-3xl tracking-tight text-indigo-500'>
       
    //         <Typewriter
    //           options={{
    //             strings: ['Full Stack Developer', 'Frontend Developer', 'Problem Solver'],
    //             autoStart: true,
    //             loop: true,
    //           }}
    //           />
    //       </motion.span>

    //       {/* <motion.span
    //         variants={container(0.5)}
    //         initial="hidden"
    //         animate="visible"
    //         className='bg-gradient-to-r from-pink-300 via-slate-500
    //               to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
            
    //         Full Stack Developer
            
    //       </motion.span> */}
    //       <div className='flex gap-7 mb-5 md:gap-0'>
    //         <motion.button
    //           variants={container(1)}
    //           initial="hidden"
    //           animate="visible"

    //           className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
    //                             my-2 max-w-xl tracking-tighter'><a href={RESUME} target='_blank'>Download Resume</a></motion.button>


    //         <motion.button
    //           variants={container(1)}
    //           initial="hidden"
    //           animate="visible"
    //           className='bg-blue-600 hover:bg-transparent text-white font-semibold hover:text-white  py-2 px-4 hover:border hover:border-blue-500  md:ml-8 rounded md:static my-2 max-w-xl tracking-tighter'>Contact Me</motion.button>
          
    //       </div>

            
          
    //     </div>

    //     <div className='w-full lg:w-1/2 lg:p-8'>
    //       <div className='flex justify-center'>
    //         <motion.img
    //           initial={{ x: 100, opacity: 0 }}
    //           animate={{ x: 0, opacity: 1 }}
    //           transition={{ duration: 1, delay: 1.2 }}
    //           className='rounded-[50%]'
    //           height="100px"
    //           width="350px"
    //           src={profilePic} alt='Santha Kumar' />
    //       </div>
    //     </div>
    //   </div>

    // </div>
  )
}

export default Hero;
