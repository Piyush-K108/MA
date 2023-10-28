import React, { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { LiaProjectDiagramSolid } from 'react-icons/lia';
import { BsHouseAdd } from 'react-icons/bs';
import { mataniProjects } from '../../../constants/Projects';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

import lgZoom from 'lightgallery/plugins/zoom';
const ProjectPopup = ({ project, closePopup }) => {

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 px-0 overflow-y-scroll overflow-x-hidden z-50 flex justify-center items-center bg-[rgba(33,33,33,0.8)]">
      <div className="absolute top-10% bottom-10% flex sm:top-12 mx:top-0 mm:top-0 nx:top-0 items-center sm:w-[80%] justify-start  ">
        <div className="relative ms:px-4 mx:ml-12 sm:ml-0 overflow-x-hidden mm:ml-[1.69rem]  nx:ml-[1.8rem] rounded-lg sm:w-[88%] mx:w-[80%]  mm:my-8 mm:w-[85%]  nx:my-8 nx:w-[85%]  mx:my-8 sm:mb-8 md:w-[95%]  lg:w-80% h-80vh md:px-0 lg:p-12 lg:ml-0  ">
          <div className="grid gap-8">
            <div className="mx-auto text-center sm:ml-10  lg:text-left xl:px-32">
              <div className="md:flex lg:grid  sm:items-center md:items-center  lg:grid-cols-2">
                <div>
                  <div className="flex items-center justify-center z-50">

                    <LightGallery speed={500} plugins={[lgZoom]}>
                      <img
                        src={project.imgUrl}
                        className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                        alt="image"
                      />
                    </LightGallery>
                  </div>

                </div>
                <div className="mb-12 lg:mb-0">
                  <div
                    style={{ backgroundColor: '#212121' }}
                    className="text-white   relative z-1 block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)] backdrop-blur-30 dark:bg-[#0d0d0dce] dark:shadow-black/20 md:px-12 lg:-ml-14">
                    <button
                      onClick={closePopup}
                      className="absolute top-4 right-4 text-dimWhite font-sans text-2xl transition duration-500 hover:text-red-500 hover:scale-150 hover:font-bold"
                    >
                      X
                    </button>
                    <h2 className="mb-8 sm:text-2xl nx:text-base  lg:text-3xl font-bold font-poppins ">{project.Title.replace(/ /g, '\u00A0')}</h2>
                    <p className="lg:mb-8 sm:mb-4 text-justify pb-2 font-poppins sm:text-[15px] nx:text-[12px]  font-normal text-dimWhite lg:text-[17px] tracking-widest lg:leading-[30px] lg:pb-0">
                      {project.shortDesc}
                    </p>

                    <div className="font-poppins font-normal   sm:text-[15px] nx:text-[12px] text-dimWhite text-[15px] lg:leading-[31.8px] mx-auto lg:mb-8 sm:mb-4 flex flex-col md:flex-row md:justify-around sm:flex-row   sm:justify-around lg:justify-between">
                      <div className='flex  ml-2 space-x-2 '>
                        <FaLocationDot className=' mt-2 lg:mt-2' />
                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">

                          {project.Location}

                        </p>
                      </div>


                      <div className='flex ml-2 space-x-2 '>

                        <LiaProjectDiagramSolid className=' mt-1 lg:mt-2' />
                        <p className="mx-auto mb-4 flex items-center md:mx-0  lg:mb-0">

                          {project.SubCategory}

                        </p>
                      </div>

                      <div className='flex ml-2 space-x-2 '>

                        <BsHouseAdd className=' mt-1 lg:mt-2' />
                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">

                          {project.Project}

                        </p>
                      </div>
                    </div>

                    <p className="mb-0  text-justify pb-2 font-poppins sm:text-[15px] nx:text-[12px] font-normal text-dimWhite lg:text-[17px] tracking-widest llg:leading-[30px]">
                      {project.Description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;