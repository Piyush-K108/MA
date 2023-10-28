import React from 'react'
import styles from '../../../style'
import Hero from '../../Home/Hero'
import { servicesPages } from "../../../constants/Services"
import "./OurServices.css"
import SectorWeCater from '../Sector/SectorWeCater'
import ServiceImg from "../../../assets/Services/Service.png"
import Stats from '../Stats/Stats'
import "../../../textRevel.css"


const OurServices = () => {

  return (
    <>
      <div className={`bg-[#313131]  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero value1={"Services"} />

        </div>
      </div>
      <div className='pt-[10%] mx-[10%]'>
      <button data-text="Awesome" className=" button align-middle sm:text-[2.5rem] ss:text-[2.5rem] mx:text-[1.5rem] mm:text-[1.5rem] nx:text-[1rem] mb-8">
      <span className=" actual-text">&nbsp;Explore&nbsp;Our&nbsp;Expertise</span>
          <span className=" hover-text" aria-hidden="true">
          &nbsp;Explore&nbsp;Our&nbsp;Expertise
          </span>
        </button>

      <div className=" flex  justify-center items-center lg:h-[70vh]  md:h-fit">
        <div className=" rounded-lg bg-[#313131]  shadowServicePage sectorContainer mx-auto  ">
          <section className="w-[100%]  ">
            <div className="flex lg:flex-row sm:flex-col justify-center items-center w-[100%]">
              <div className="w-full h-[70vh]  align-middle shrink-2 grow-0 basis-auto lg:flex lg:w-[60%] md:flex sm:hidden xs:hidden mx:hidden mm:hidden nx:hidden md:w-2/12 ">
               <img className='h-full rounded-l-lg w-full' src={ServiceImg}/>
              </div>
              <div className=" px-3 sm:px-16 mx:p-8 sm:py-16 nx:py-5 lg:px-[30px] grid grid-cols-1 ">
                {servicesPages.map((serviceGroup, groupIndex) => (
                  <div
                    key={groupIndex}
                    className={`grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 `}
                  >
                    {serviceGroup.names.map((service, index) => (
                      <div
                        key={index}
                        className="  m-[7px]  flex flex-grow !flex-row  
                        items-center rounded-[10px] border-[1px] border-gray-200 bg-dimWhite bg-clip-border shadow-md  shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white 
                        dark:shadow-none"
                      >
                         <div className="ml-[18px] flex h-[90px] flex-row items-center">
                          <div className="rounded-full bg-lightPrimary   p-3 dark:bg-navy-700">
                            <span className="flex items-center text-brand-500 dark:text-[#212121]">
                              {<service.icon />}
                            </span>
                          </div>
                        </div>
                        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                          <h4 className="lg:text-xl pr-3 font-bold text-navy-700 dark:text-[#212121]">
                            {service.name}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
      <div className=' mx-[10%]'>

        <Stats />
      </div>
      <div className='pb-[10%] mx-[10%]'>
        <SectorWeCater />

      </div>



    </>


  )
}

export default OurServices