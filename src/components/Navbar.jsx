import logo from '../assets/logo.svg';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.svg';
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
   const [showNavbar, setShowNavbar] = useState(false);

   useEffect(() => {
      if (showNavbar) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }
      return () => {
         document.body.style.overflow = 'auto';
      };
   }, [showNavbar]);
   return (
      <div className='absolute top-0 left-0 w-full z-10'>
         <div className='container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={logo} alt='' />
            <ul className='hidden md:flex gap-7 text-white'>
               <a href='#' className='cursor-pointer hover:text-gray-400 duration-200'>
                  Home
               </a>
               <a href='#about' className='cursor-pointer hover:text-gray-400 duration-200 '>
                  About
               </a>
               <a href='#projects' className='cursor-pointer hover:text-gray-400 duration-200'>
                  Projects
               </a>
               <a href='#testimony' className='cursor-pointer hover:text-gray-400 duration-200'>
                  Testimony
               </a>
               <a href='#contact' className='cursor-pointer hover:text-gray-400 duration-200'>
                  Contact
               </a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
            <img onClick={() => setShowNavbar(!showNavbar)} src={menu_icon} className='md:hidden w-7 cursor-pointer' />
         </div>
         {/* mobile menu */}
         <div className={`md:hidden ${showNavbar ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
               <img onClick={() => setShowNavbar(!showNavbar)} src={cross_icon} className='w-6 duration-200' alt='' />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
               <a onClick={() => setShowNavbar(!showNavbar)} href='#Header' className='px-4 py-2 rounded-full inline-block'>
                  Home
               </a>
               <a onClick={() => setShowNavbar(!showNavbar)} href='#about' className='px-4 py-2 rounded-full inline-block'>
                  About
               </a>
               <a onClick={() => setShowNavbar(!showNavbar)} href='#projects' className='px-4 py-2 rounded-full inline-block'>
                  Projects
               </a>
               <a onClick={() => setShowNavbar(!showNavbar)} href='#testimony' className='px-4 py-2 rounded-full inline-block'>
                  Testimony
               </a>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
