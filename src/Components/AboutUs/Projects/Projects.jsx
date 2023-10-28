import React, { useState } from 'react';
import styles from './Projects.module.css';
import { mataniProjects } from '../../../constants/Projects';
import ProjectPopup from './ProjectPopup';
const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showMore, setShowMore] = useState(false);

  const openPopup = (project) => {
    setIsPopupOpen(true);
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const filteredProjects =
    selectedFilter === 'All'
      ? mataniProjects
      : mataniProjects.filter((project) => project.Category === selectedFilter);

  const isMobile = window.innerWidth <= 768;

  const numCardsToShow = showMore ? filteredProjects.length : isMobile ? 4 : 8;

  return (
    <div className=" bg-[#313131]  md:px-[5%]  text-dimWhite">
      <div className=" sm:flex justify-between items-center  xl:py-16 mx:py-8 lg:py-16 mb-4">
      <button data-text="Awesome" className=" mx:ml-8 nx:ml-8 sm:ml-10 lg:ml-[0px] button align-middle sm:text-[2.5rem] ss:text-[2.5rem] mx:text-[1.5rem] mm:text-[1.5rem] nx:text-[1rem]">
          <span className="actual-text">&nbsp;Architecture&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;Architecture&nbsp;
          </span>
        </button>
          </div>

        <div className="h-20 relative nx:w-[100%] rounded-lg sm:mb-0">
         
            <div className="space-x-1 sm:space-x-3 nx:mx-2 mm:space-x-1 flex  flex-row sm:absolute bottom-0 items-center mx:justify-center sm:left-[20%] lg:left-[15.9%] md:left-[25%] transform   pb-8   ">
            <button
              className={`sm:px-8 mm:w-[80%] nx:text-[.6rem] nx:px-4 nx:py-0 mm:text-center lg:px-16 lg:py-4 lg:w-[100%] lg:text-[1.5rem] mm:m-auto my-2 sm:my-0 shadow-md xl:shadow-sm inset shadow-gray-950  inset-white appearance-none  border bg-slate-200 rounded-full text-[#212121] cursor-pointer inline-block font-robert font-semibold text-lg line-normal outline-none mx:px-4   mm:px-0 mm:text-[.68rem] mm:font-bold  mx:items-center mx:justify-center mx:text-[.89rem] mx:py-1 mm:py-1 px-12 py-3 md:text-start  text-end no-underline transition-transform transform translate-y-0 hover:text-white hover:border-[#212121] hover:bg-[#212121] hover:shadow-sm hover:-translate-y-2 active:shadow-none active:translate-y-0 ${selectedFilter === 'All' ? styles.activeFilter : styles.filterButton}`}
              onClick={() => setSelectedFilter('All')}
            >
              All
            </button>

            <button
              className={` mm:w-[80%] nx:text-[.6rem] nx:px-4 nx:py-0 mm:text-center lg:px-16 lg:py-4 lg:w-[100%] lg:text-[1.5rem] mm:m-auto my-2 sm:my-0 shadow-md xl:shadow-sm inset shadow-gray-950  inset-white appearance-none  border bg-slate-200 rounded-full text-[#212121] cursor-pointer inline-block font-robert font-semibold text-lg line-normal outline-none mx:px-4   mm:px-0 mm:text-[.68rem] mm:font-bold  mx:items-center mx:justify-center mx:text-[.89rem] mx:py-1 mm:py-1 px-12 py-3 md:text-start  text-end no-underline transition-transform transform translate-y-0 hover:text-white hover:border-[#212121] hover:bg-[#212121] hover:shadow-sm hover:-translate-y-2 active:shadow-none active:translate-y-0 ${selectedFilter === 'Residential' ? styles.activeFilter : styles.filterButton}`}
              onClick={() => setSelectedFilter('Residential')}
            >
              Residential
            </button>

            <button
              className={`mm:w-[80%] nx:text-[.6rem] nx:px-4 nx:py-0 mm:text-center lg:px-16 lg:py-4 lg:w-[100%] lg:text-[1.5rem] mm:m-auto my-2  sm:my-0 shadow-md xl:shadow-sm inset shadow-gray-950  inset-white appearance-none  border bg-slate-200 rounded-full text-[#212121] cursor-pointer inline-block font-robert font-semibold text-lg line-normal outline-none mx:px-4  mm:px-0 mm:text-[.68rem] mm:font-bold   mx:items-center mx:justify-center mx:text-[.89rem] mx:py-1 mm:py-1 px-12 py-3 md:text-start  text-end no-underline transition-transform transform translate-y-0 hover:text-white hover:border-[#212121] hover:bg-[#212121] hover:shadow-sm hover:-translate-y-2 active:shadow-none active:translate-y-0 ${selectedFilter === 'Commercial' ? styles.activeFilter : styles.filterButton}`}
              onClick={() => setSelectedFilter('Commercial')}
            >
              Commercial
            </button>

            <button
              onClick={() => setSelectedFilter('Spiritual')}
              className={` mm:w-[80%] nx:text-[.6rem] nx:px-4 nx:py-0 mm:text-center lg:px-16 lg:py-4 lg:w-[100%] lg:text-[1.5rem] mm:m-auto my-2  sm:my-0 shadow-md xl:shadow-sm inset shadow-gray-950  inset-white appearance-none  border bg-slate-200 rounded-full text-[#212121] cursor-pointer inline-block font-robert font-semibold text-lg line-normal outline-none mx:px-4   mm:px-0 mm:text-[.68rem] mm:font-bold  mx:items-center mx:justify-center mx:text-[.89rem] mx:py-1 mm:py-1 px-12 py-3 md:text-start  text-end no-underline transition-transform transform translate-y-0 hover:text-white hover:border-[#212121] hover:bg-[#212121] hover:shadow-sm hover:-translate-y-2 active:shadow-none active:translate-y-0 ${selectedFilter === 'Spiritual' ? styles.activeFilter : styles.filterButton}`}
            >
              Spiritual
            </button>
          
        </div>
      </div>

      <div className={`flex flex-wrap nx:p-[1%]  justify-center `}>
        {filteredProjects.slice(0, numCardsToShow).map((project, index) => (
          <div
            key={index}
            className={`${styles.card} m-2`}
            style={{ backgroundImage: `url(${project.imgUrl})`, backgroundSize: 'cover' }}
          >
            <div className={`${styles.cardContent}`}>
              <h2 className={`${styles.cardTitle} text-2xl`}>{project.Title}</h2>
              <p className={`${styles.cardBody} font-poppins font-normal text-dimWhite text-[15px] leading-[px] overflow-hidden max-h-16`}>
                {project.shortDesc}
              </p>
              <button onClick={() => openPopup(project)} className={`mt-3 font-poppins bg-[#ff8138] font-medium  ServiceButton transition-all duration-1000  hover:text-black hover:from-white hover:to-black ${styles.projectViewButton} text-[0.7rem]`}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>


      {isPopupOpen && selectedProject && (
        <ProjectPopup project={selectedProject} closePopup={closePopup} />
      )}
      {filteredProjects.length > (isMobile ? 4 : 8) && (
        <div className="flex justify-center my-5">
         <button onClick={() => setShowMore(!showMore)} className={`font-poppins bg-[#ff8138] font-medium  ServiceButton transition-all duration-1000  hover:text-black hover:from-white hover:to-black ${styles.projectViewButton}`}>
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;