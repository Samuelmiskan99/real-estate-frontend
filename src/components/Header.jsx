import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <div className='h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: 'url("/header_img.png")' }}>
         <Navbar />
         <div className='container mx-auto text-center py-4 px-6 md:px-20'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-white'>Searching for a dream house?</h2>
            <div className='flex gap-4 justify-center mt-10 text-white '>
               <Link to='/projects' className='cursor-pointer hover:text-white duration-200 border border-white px-8 py-3 rounded-full hover:bg-rose-500 '>
                  Projects
               </Link>
               <Link to='/contact' className='cursor-pointer hover:text-white duration-200 border border-white px-8 py-3 rounded-full bg-rose-500 hover:bg-red-500  '>
                  Contact Us
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Header;
