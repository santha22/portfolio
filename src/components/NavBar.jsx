import React, { useEffect, useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  let [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleNavLinkClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  let [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (








    <nav className="bg-white h-20 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
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

          {/* <button className='btn bg-blue-600 text-white py-0 px-3 md:ml-8 rounded md:static'>Contact Me</button> */}
      </ul>
        <div onClick={() => setIsOpen(!isOpen)} className='block cursor-pointer md:hidden mr-2'>
          {
              isOpen ? <XMarkIcon className='w-7 h-7'/> : <Bars3BottomRightIcon className='w-7 h-7'/>
          }

        </div>
        {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div> */}
        {/* <div className="hidden w-full" id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
            </li>
          </ul>
        </div> */}
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


    // <div  className='h-[100px] max-w-[1200px] mx-auto  flex justify-between items-center'>
    //   {/* logo  */}
    //   <h1 className='font-bold text-3xl ml-4'>Portfolio</h1>

      // <ul className='hidden md:flex'>
      //     <li className='font-semibold p-5'>
      //     <button onClick={() => handleNavLinkClick('home')}>Home</button>
      //   </li>
      //   <li className='font-semibold p-5'>
      //     <button onClick={() => handleNavLinkClick('about')}>About</button>
      //   </li>
      //   <li className='font-semibold p-5'>
      //     <button onClick={() => handleNavLinkClick('experience')}>Experience</button>
      //   </li>
      //   <li className='font-semibold p-5'>
      //     <button onClick={() => handleNavLinkClick('technologies')}>Technologies</button>
      //   </li>
      //   <li className='font-semibold p-5'>
      //     <button onClick={() => handleNavLinkClick('projects')}>Projects</button>
      //   </li>
      //   <li className='font-semibold p-5'>
      //     <button onClick={() => handleNavLinkClick('contact')}>Contact</button>
      //   </li>

      //     {/* <button className='btn bg-blue-600 text-white py-0 px-3 md:ml-8 rounded md:static'>Contact Me</button> */}
      // </ul>


      // <div onClick={() => setIsOpen(!isOpen)} className='block cursor-pointer md:hidden mr-2'>
      //     {
      //         isOpen ? <XMarkIcon className='w-7 h-7'/> : <Bars3BottomRightIcon className='w-7 h-7'/>
      //     }

      // </div>


    //   {/* links  */}
    //   <div className={`${isOpen ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>

    //     <ul className='p-8 text-lg'>
    //         <li className='font-semibold p-2'>
    //         <button onClick={() => handleNavLinkClick('home')}>Home</button>
    //       </li>
    //       <li className='font-semibold p-2'>
    //         <button onClick={() => handleNavLinkClick('about')}>About</button>
    //       </li>
    //       <li className='font-semibold p-2'>
    //         <button onClick={() => handleNavLinkClick('experience')}>Experience</button>
    //       </li>
    //       <li className='font-semibold p-2'>
    //         <button onClick={() => handleNavLinkClick('technologies')}>Technologies</button>
    //       </li>
    //       <li className='font-semibold p-2'>
    //         <button onClick={() => handleNavLinkClick('projects')}>Projects</button>
    //       </li>
    //       <li className='font-semibold p-2'>
    //         <button onClick={() => handleNavLinkClick('contact')}>Contact</button>
    //       </li>

    //         {/* <button className='btn bg-blue-600 text-white py-1 px-3  md:ml-8 rounded md:static'>Contact Me</button> */}
    //     </ul>
    //   </div>


    // </div>




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
