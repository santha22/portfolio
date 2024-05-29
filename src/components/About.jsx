import React from 'react'
import aboutImg from "../assets/santha kumar.jpg"
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants/index';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className='border-b border-neutral-900 pb-4 pt-20'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 0.5}}className='my-20 text-center text-4xl'>
        About 
       <span className='p-2 text-neutral-500'>Me</span>
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
              <div className='flex gap-2'>
              <a href={CONTACT.github} target='_blank'><FaGithub className='w-6 h-10'/></a>
              <a href={CONTACT.linkedin} target='_blank'><FaLinkedin className='w-6 h-10'/></a>
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
