import styles from "../../style";
import React from 'react'; // Import React if not already imported
import img1 from "../../assets/Projects/Residential/Exterior/cuboidalOyster.jpg";
import img2 from "../../assets/Projects/Residential/Exterior/Aureole.jpg";
import img3 from "../../assets/Projects/Commercial/mainView512.jpg";
import img4 from "../../assets/Projects/Residential/Exterior/VERDURE.jpg";
import img5 from "../../assets/Projects/Residential/Interior/Bedroom3.jpg";
import The_GROVE from '../../assets/Projects/Residential/Exterior/squitSWAN.jpg';
import Lighthouse from "../Lighthouse";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Project.css"
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  The_GROVE
];
const descriptions = ["A Bungalow", "A Private Villa", `Drive-In Dine-Out`, "A Bungalow", "Bedroom", "A Villa"];
const titles = ["Cuboidal Oyster", "Aureole", "Café 512 Main", "THE VERDURE VILLA", "The Cantilever Villa's", "THE SQUINT SWAN "];
const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  });
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const openLighthouse = (index) => {
    setSelectedImage(index);
  };

  const closeLighthouse = () => {
    setSelectedImage(null);
  };
  return (
    <section ref={ref} id="clients" className={`$ ${styles.flexCenter} flex-col relative py-[10%]`}>



      <div className={`${isVisible ? 'animate-fadeInDown' : ''}  w-full flex justify-center items-center sm:items-center flex-row sm:flex-row mx:flex-col mm:flex-col nx:flex-col mx:items-start mm:items-start nx:items-start sm:mb-16 mb-6 relative z-[1]`}>
      <a
        href="/projects"
        data-text="Awesome"
        className="button align-middle sm:text-[2.5rem] ss:text-[2.5rem] mx:text-[1.5rem] mm:text-[1.5rem] nx:text-[1rem]"
      >
        <span className="actual-text">&nbsp;Our&nbsp;Projects&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp;Our&nbsp;Projects&nbsp;
        </span>
        <span className="click-me">{"Click Me"}</span>
      </a>
      <div className="w-full md:mt-0 flex justify-end mt-6">
        <p className={`${styles.paragraph} sm:text-[1.2rem] mx:text-[.9rem] mm:text-[.89rem] nx:text-[.84rem] mx:text-justify mm:text-justify nx:text-justify  sm:pl-8 text-left sm:max-w-[600px] mm:max-w-[850px] `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
     
    </div>





      <div className={`grid ${isVisible ? 'animate-fadeInUP' : ''} gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1`}>
        {selectedImage === null && images.map((url, index) => (
          <div key={index}
            className={` relative overflow-hidden w-full homeProjectBorder homeProjectContainer  h-48 md:h-64 rounded-lg`}
            onClick={() => openLighthouse(index)}
          >

            <img src={url} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white text-center py-2 opacity-0 transition-opacity duration-300 hover:opacity-100 `}>
              <h3 className="text-lg font-bold">{titles[index]}</h3>
              <p className="text-sm">{descriptions[index]}</p>
            </div>

          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <div className="flex items-center justify-center z-50">
          <Lighthouse images={[images[selectedImage]]} onClose={closeLighthouse} />
        </div>
      )}
    </section>
  )
};

export default Projects;