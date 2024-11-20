import brand from '../../assets/brand_img.png';

const AboutPage = () => {
   return (
      <div className='flex flex-col items-center container mx-auto px-6 md:px-16 lg:px-24 py-14 w-full overflow-hidden' id='about'>
         {/* Header Section */}
         <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-center'>
            About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>
         </h1>
         <p className='text-gray-600 max-w-3xl text-center mb-12 leading-relaxed text-l'>
            Our company is a leading provider of innovative solutions for the modern world. We strive to make a positive impact on our customers and the world around them.
         </p>

         {/* Content Section */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full'>
            {/* Image Section */}
            <div className='flex justify-center'>
               <img src={brand} alt='Brand Image' className='w-full max-w-sm md:max-w-md lg:max-w-lg ' />
            </div>

            {/* Text and Stats Section */}
            <div className='flex flex-col items-center md:items-start text-gray-700  '>
               {/* Stats Grid */}
               <div className='grid grid-cols-2 gap-6 w-full max-w-lg mt-10'>
                  <div className='text-center md:text-left'>
                     <p className='text-4xl font-semibold text-blue-600'>10+</p>
                     <p className='text-lg'>Years of Experience</p>
                  </div>
                  <div className='text-center md:text-left'>
                     <p className='text-4xl font-semibold text-blue-600'>12+</p>
                     <p className='text-lg'>Projects Completed</p>
                  </div>
                  <div className='text-center md:text-left'>
                     <p className='text-4xl font-semibold text-blue-600'>20+</p>
                     <p className='text-lg'>Happy Clients</p>
                  </div>
                  <div className='text-center md:text-left'>
                     <p className='text-4xl font-semibold text-blue-600'>25+</p>
                     <p className='text-lg'>Ongoing Projects</p>
                  </div>
               </div>

               {/* Description and Button */}
               <p className='mt-6 max-w-lg text-center md:text-left leading-relaxed'>
                  We are a team of experienced professionals who are passionate about what we do. Our goal is to provide top-notch services and solutions that make a difference.
               </p>
               <button className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 shadow-lg transition duration-300'>Learn More</button>
            </div>
         </div>
      </div>
   );
};

export default AboutPage;
