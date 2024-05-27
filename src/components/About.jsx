import React from 'react'
// import aboutImg from '../assets/sk_1_removebg.png'
import aboutImg from "../assets/santha kumar.jpg"
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 0.5}}className='my-20 text-center text-4xl'>
        About 
       <span className='text-neutral-500'>Me</span>
      </motion.h1>

      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100}}
          transition={{ duration: 0.5}}
          className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded h-80' src={aboutImg} alt='about' />
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100}}
          transition={{ duration: 0.5}}
          className='w-full lg:w-1/2'>
            <div className='flex flex-col gap-0 justify-center lg:justify-start'>
              <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
              <p className='max-w-xl text-xl font-extrabold'>Never Mind🎯</p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
