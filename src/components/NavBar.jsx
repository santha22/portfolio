import React, { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  let [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  let [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
      


      
      
      <div  className='h-[100px] max-w-[1200px] mx-auto  flex justify-between items-center'>
        {/* logo  */}
        <h1 className='font-bold text-3xl ml-4'>Portfolio</h1>
        
        <ul className='hidden md:flex'>
            <li className='font-semibold p-5'>
            <button onClick={() => handleNavLinkClick('home')}>Home</button>
          </li>
          <li className='font-semibold p-5'>
            <button onClick={() => handleNavLinkClick('about')}>About</button>
          </li>
          <li className='font-semibold p-5'>
            <button onClick={() => handleNavLinkClick('experience')}>Experience</button>
          </li>
          <li className='font-semibold p-5'>
            <button onClick={() => handleNavLinkClick('technologies')}>Technologies</button>
          </li>
          <li className='font-semibold p-5'>
            <button onClick={() => handleNavLinkClick('projects')}>Projects</button>
          </li>
          <li className='font-semibold p-5'>
            <button onClick={() => handleNavLinkClick('contact')}>Contact</button>
          </li>
            
            {/* <button className='btn bg-blue-600 text-white py-0 px-3 md:ml-8 rounded md:static'>Contact Me</button> */}
        </ul>


        <div onClick={() => setIsOpen(!isOpen)} className='block cursor-pointer md:hidden mr-2'>
            {
                isOpen ? <XMarkIcon className='w-7 h-7'/> : <Bars3BottomRightIcon className='w-7 h-7'/>
            }

        </div>

        
        {/* links  */}
        <div className={`${isOpen ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>

          <ul className='p-8 text-lg'>
              <li className='font-semibold p-2'>
              <button onClick={() => handleNavLinkClick('home')}>Home</button>
            </li>
            <li className='font-semibold p-2'>
              <button onClick={() => handleNavLinkClick('about')}>About</button>
            </li>
            <li className='font-semibold p-2'>
              <button onClick={() => handleNavLinkClick('experience')}>Experience</button>
            </li>
            <li className='font-semibold p-2'>
              <button onClick={() => handleNavLinkClick('technologies')}>Technologies</button>
            </li>
            <li className='font-semibold p-2'>
              <button onClick={() => handleNavLinkClick('projects')}>Projects</button>
            </li>
            <li className='font-semibold p-2'>
              <button onClick={() => handleNavLinkClick('contact')}>Contact</button>
            </li>
              
              {/* <button className='btn bg-blue-600 text-white py-1 px-3  md:ml-8 rounded md:static'>Contact Me</button> */}
          </ul>
        </div>
        

      </div>
    // <div className='shadow-md w-full fixed top-0 left-0'>
    //   <div  className={`md:px-10 py-4 px-7 md:flex justify-between items-center
    //     ${isOpen ? 'bg-white text-black h-full' : ''}`}>
    //     {/* logo  */}
    //     <div className='flex text-2xl cursor-pointer items-center gap-2'>
            
    //         <span className='font-bold'>Portfolio</span>
    //     </div>

    //     <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
    //         {
    //             isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
    //         }

    //     </div>
        



    //     {/* links  */}
        
    //     <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
    //        md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0     
    //        transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
    //         <li className='font-semibold my-7 md:my-0 md:ml-8'>
    //         <button onClick={() => handleNavLinkClick('home')}>Home</button>
    //       </li>
    //       <li className='font-semibold my-7 md:my-0 md:ml-8'>
    //         <button onClick={() => handleNavLinkClick('about')}>About</button>
    //       </li>
    //       <li className='font-semibold my-7 md:my-0 md:ml-8'>
    //         <button onClick={() => handleNavLinkClick('experience')}>Experience</button>
    //       </li>
    //       <li className='font-semibold my-7 md:my-0 md:ml-8'>
    //         <button onClick={() => handleNavLinkClick('technologies')}>Technologies</button>
    //       </li>
    //       <li className='font-semibold my-7 md:my-0 md:ml-8'>
    //         <button onClick={() => handleNavLinkClick('projects')}>Projects</button>
    //       </li>
    //       <li className='font-semibold my-7 md:my-0 md:ml-8'>
    //         <button onClick={() => handleNavLinkClick('contact')}>Contact</button>
    //       </li>
            
    //         <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>Contact Me</button>
    //     </ul>
        

    //   </div>
    // </div>
  )
}

export default NavBar;
