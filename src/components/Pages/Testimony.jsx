import { testimonyData } from '../../assets/assets';
import star_icon from '../../assets/star_icon.svg';
import { motion } from 'framer-motion';
const Testimony = () => {
   return (
      <motion.div
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1.5 }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         className='container mx-auto lg:px-32 py-10 w-full overflow-hidden mt-10'
         id='testimony'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Customers <span className='underline underline-offset-4 decoration-1 under font-light'>Testimony</span>
         </h1>
         <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Customers stories from those who have used our services</p>
         <div className='flex flex-wrap justify-center gap-8'>
            {testimonyData?.map((testimony, index) => (
               <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                  <img src={testimony.image} alt={testimony.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
                  <h2 className='text-xl text-gray-700 font-medium'>{testimony.name}</h2>
                  <p className='text-gray-500 mb-4 text-sm'>{testimony.title}</p>
                  <div className='flex justify-center gap-1 text-red-500 mb-4'>
                     {Array.from({ length: testimony.rating }, (item, index) => (
                        <img key={index} src={star_icon} alt='' />
                     ))}
                  </div>
                  <p className='text-gray-600'>{testimony.text}</p>
               </div>
            ))}
         </div>
      </motion.div>
   );
};

export default Testimony;
