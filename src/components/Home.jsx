// import React from 'react'
// import {HERO_CONTENT} from '../constants/index'
// import profilePic from "../assets/kevinRushProfile.png"
// import { delay, motion } from 'framer-motion';

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0},
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay}
//   }
// })

// const Home = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
//         <div className='flex flex-wrap'>
//             <div className='w-full lg:w-1/2'>
//                 <motion.h1 
//                   variants={container(0)}
//                   initial="hidden"
//                   animate="visible"
//                   className='pb-16 text-6xl font-thin tracking-tight lg:mt-16
//                   lg:text-8xl'>Kevin Rush
//                 </motion.h1>
//                 <motion.span 
//                   variants={container(0.5)}
//                   initial="hidden"
//                   animate="visible"
//                   className='bg-gradient-to-r from-pink-300 via-slate-500
//                   to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
//                     Full Stack Developer
//                 </motion.span>
//                 <motion.p 
//                   variants={container(1)}
//                   initial="hidden"
//                   animate="visible"
//                   className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                
//             </div>

//             <div className='w-full lg:w-1/2 lg:p-8'>
//               <div className='flex justify-center'>
//                 <motion.img 
//                   initial={{ x: 100, opacity: 0}}
//                   animate={{ x: 0, opacity: 1}}
//                   transition={{ duration: 1, delay: 1.2}}
//                   src={profilePic} alt='Kevin Rush' />
//               </div>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Home


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Experience from './components/Experience';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
