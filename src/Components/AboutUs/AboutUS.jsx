import React, { useState, useEffect } from 'react'
import Hero from '../Home/Hero'
import Founder from './Founder/Founder'
import Company from './Company/Company'
import Projects from '../AboutUs/Projects/Projects'
import OurTeam from './OurTeam/OurTeam'
import "./AboutUS.css"
const AboutUS = () => {

  return (

    <div className={`bg-[#313131]`}>
      <div className=" w-[100%]   ">
        <Hero value1={" About US"} />

      <div className={`bg-[#313131] `}>
        <div className=''>

        <Company />
        </div>

        <Founder />
        <div className="">

          <Projects />
        </div>
        <div className="flex">

          <OurTeam />
        </div>
      </div>

      </div>





      
      </div>
      

      
  )
}

export default AboutUS
