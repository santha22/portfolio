import React, { useState } from 'react'
import { Bars3BottomRightIcon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  let [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div  className="md:px-10 py-4 px-7 md:flex justify-between items-center
        ">
        {/* logo  */}
        <div className='flex text-2xl cursor-pointer items-center gap-2'>
            {/* <BeakerIcon className='w-7 h-7 text-blue-600'/> */}
            <span className='font-bold'>Portfolio</span>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
            {
                isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
            }

        </div>
        



        {/* links  */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
           md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0     
           transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
            <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <button onClick={() => handleNavLinkClick('home')}>Home</button>
          </li>
          <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <button onClick={() => handleNavLinkClick('about')}>About</button>
          </li>
          <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <button onClick={() => handleNavLinkClick('experience')}>Experience</button>
          </li>
          <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <button onClick={() => handleNavLinkClick('technologies')}>Technologies</button>
          </li>
          <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <button onClick={() => handleNavLinkClick('projects')}>Projects</button>
          </li>
          <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <button onClick={() => handleNavLinkClick('contact')}>Contact</button>
          </li>
            
            <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>Contact Me</button>
        </ul>

      </div>
    </div>
  )
}

export default NavBar;
