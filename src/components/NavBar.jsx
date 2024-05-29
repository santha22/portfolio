import React, { useEffect, useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {

  let [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

 

 
  

  return (
    <nav className="bg-white h-20 dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">Portfolio</span>
        </a>

        <ul className='hidden md:flex'>
          <li className='font-semibold text-black p-5'>
          <button onClick={() => handleNavLinkClick('home')}>Home</button>
        </li>
        <li className='font-semibold text-black p-5'>
          <button onClick={() => handleNavLinkClick('about')}>About</button>
        </li>
        <li className='font-semibold text-black p-5'>
          <button onClick={() => handleNavLinkClick('experience')}>Experience</button>
        </li>
        <li className='font-semibold text-black p-5'>
          <button onClick={() => handleNavLinkClick('technologies')}>Technologies</button>
        </li>
        <li className='font-semibold text-black p-5'>
          <button onClick={() => handleNavLinkClick('projects')}>Projects</button>
        </li>
        <li className='font-semibold text-black p-5'>
          <button onClick={() => handleNavLinkClick('contact')}>Contact</button>
        </li>

          
      </ul>
        <div onClick={() => setIsOpen(!isOpen)} className='block cursor-pointer md:hidden mr-2'>
          {
              isOpen ? <XMarkIcon className='w-7 h-7'/> : <Bars3BottomRightIcon className='w-7 h-7'/>
          }

        </div>

        <div className={`${isOpen ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={() => handleNavLinkClick('home')} className="block py-2 px-3 text-white rounded"  aria-current="page">Home</button>
            </li>
            <li>
              <button onClick={() => handleNavLinkClick('about')} className="block py-2 px-3 text-white rounded  md:p-0 bg-transparent">About</button>
            </li>
            <li>
              <button onClick={() => handleNavLinkClick('experience')} className="block py-2 px-3 text-white rounded  md:p-0 bg-transparent">Experience</button>
            </li>
            <li>
              <button onClick={() => handleNavLinkClick('technologies')} className="block py-2 px-3 text-white rounded  md:p-0 bg-transparent">Technologies</button>
            </li>
            <li>
              <button onClick={() => handleNavLinkClick('projects')} className="block py-2 px-3 text-white rounded  md:p-0 bg-transparent">Projects</button>
            </li>
            <li>
              <button onClick={() => handleNavLinkClick('contact')} className="block py-2 px-3 text-white rounded  md:p-0 bg-transparent">Contact</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>





    




  )
}

export default NavBar;
