import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';
import styles from './ImageSlider.module.css';
import image1 from '../../assets/Projects/Residential/Exterior/whitePhoenix.jpg';
import image2 from '../../assets/Projects/Residential/Exterior/Aureole.jpg';
import image3 from '../../assets/Projects/Residential/Exterior/Cadrehouse.jpg';
import image4 from '../../assets/Projects/Residential/Exterior/BriceHouse.jpg';
import { useInView } from 'react-intersection-observer';

const ImageSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const images = [image1, image2, image3, image4];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView, images.length]);




  return (
    <div className="relative">
      <div className="slider" style={{ width: '100%', height: '90vh' }}>
        <Slider
          dots={false}
          arrows={false}
          infinite={true}
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          fade={true}
          autoplay={true}
          autoplaySpeed={6000}
          afterChange={(current) => {
            setCurrentIndex(current);
          }}
        >
          
          {images.map((image, index) => (
            <div key={index} className={`slide ${index === currentIndex ? styles.zoomIn : ''}`}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`mx:h-[100vh] mc:-[100vh] mm:h-[100vh] nx:h-[100vh] sm:h-[124vh] ${styles[`slide${index} `]}`}
              />
            </div>
          ))}

        </Slider>
      </div>
      <div ref={ref} className="animate-fadeInDown absolute text-[#c0c1c5] inset-0 flex items-center justify-center">
        <div className="w-[80%] px-2 sm:max-w-md md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="text-center ">
            <div className="block rounded-lg  px-6 py-10 shadow-md bg-opacity-90 bg-[#313131] mx:py-5 mm:py-5 nx:py-5  md:px-12"
            >
              <h1 className="flex-1 font-poppins   font-semibold lg:text-[4.5rem] mx:text-[2.5rem] mm:text-[1.5rem] nx:text-[1rem] lg:leading-[90.8px] mx:leading-[35.8px] mm:leading-[30.8px] nx:leading-[25.8px] z-10">
                {props.val1}<br className="" />
                <span className="text-gradient ">{props.val2}</span><br className="" />
                <span className="">
                  {props.val3}
                </span>
              </h1>
              <div className={`${isVisible ? 'animate-fadeInRight' : ''} z-10 font-poppins 
              nx:text-[0.6rem]  mm:text-[0.64rem]  mx:text-[0.7rem] nx:text-justify xs:text-[1rem] ss:text-[1rem]
              sm:text-[0.78rem]  mc:text-[0.82rem]  md:text-[1rem] lg:text-[1rem] xl:text-[1.23rem]
              text-[#c0c1c5] italic`}>
                {props.val4}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ImageSlider;
