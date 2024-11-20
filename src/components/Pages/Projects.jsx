import { useEffect, useState } from 'react';
import { projectsData } from '../../assets/assets';
import left_arrow from '../../assets/left_arrow.svg';
import right_arrow from '../../assets/right_arrow.svg';

const Projects = () => {
   const [currentProject, setCurrentProject] = useState(0);
   const [cardProject, setCardProject] = useState(1);

   useEffect(() => {
      const UpdateCardProject = () => {
         if (window.innerWidth >= 1024) {
            setCardProject(projectsData.length);
         } else {
            setCardProject(1);
         }
      };
      UpdateCardProject();
      window.addEventListener('resize', UpdateCardProject);
      return () => {
         window.removeEventListener('resize', UpdateCardProject);
      };
   }, []);

   const nextProject = () => {
      setCurrentProject((prevIndex) => (prevIndex + 1) % projectsData.length);
   };

   const prevProject = () => {
      setCurrentProject((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
   };

   return (
      <div
         className='relative bg-cover bg-center py-20 mt-10'
         style={{
            backgroundImage: "url('/project_bg.jpg')", // Tambahkan path gambar background
         }}>
         {/* Overlay untuk redup */}
         <div className='absolute inset-0 bg-gray-600 bg-opacity-50'></div>
         {/* Konten utama */}
         <div className='relative container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-19 w-full overflow-hidden' id='projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center text-white'>
               Project <span className='underline underline-offset-4 decoration-1 under font-light text-gray-600'>Completed</span>
            </h1>
            <p className='text-center text-gray-200 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Projects</p>
            <div className='flex justify-end items-center mb-8'>
               <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                  <img src={left_arrow} alt='Previous' />
               </button>
               <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                  <img src={right_arrow} alt='Next' />
               </button>
            </div>
            {/* Project Slider Container */}
            <div className='overflow-hidden'>
               <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentProject * 100) / cardProject}%)` }}>
                  {projectsData?.map((project, index) => (
                     <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                           <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                              <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                              <p className='text-sm text-gray-500'>
                                 {project.price} <span className='px-1'>|</span> {project.location}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;
