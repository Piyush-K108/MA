import React from 'react'
import Hero from '../../Components/Home/Hero'
import Servises from '../../Components/Home/Servises'
import styles from '../../../src/style'
import Projects from './Projetcs'
import Testimonials from '../../Components/Home/Testimonials/Testimonials'
const Home = () => {
  const value1="BRING NEW "
  const value2="IDEAS "
  const value3="TO YOU"
  return (

   <>
   <div className={`bg-[#313131]  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero value1={value1} value2={value2} value3={value3}/>
        
      </div>
    </div>

    <div className='bg-[#313131] flex-center'>
      <Testimonials />
      
    </div>

    <div className={` bg-[#313131] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Servises/>
      <Projects />
      </div>
    </div>
    </>
  )
}

export default Home
