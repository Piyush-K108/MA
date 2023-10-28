import styles from "../../style";
import "../../textRevel.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../App.css";
import { services } from "../../constants/index";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Components/Home/Servises.css"
const Services = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // The callback will only be fired once when the component enters the viewport
    threshold: 0.2, // The element is considered in view when it's 20% visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);

    }
  }, [inView]);


  return (
    <>

      <div className="pt-[10%] ">
        <button data-text="Awesome" className="button align-middle sm:text-[2.5rem] ss:text-[2.5rem] mx:text-[1.5rem] mm:text-[1.5rem] nx:text-[1rem]">
          <span className="actual-text">&nbsp;Services&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;Services&nbsp;
          </span>
        </button>
        <div>
          <section
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} homeServiceBorder homeServiceContainer sm:flex-row flex-col bg-black bg-opacity-60 rounded-[20px] box-shadow`}
          >
            <div ref={ref} className="flex-1 flex flex-col">
              <div className={`${isVisible ? 'animate-fadeInLeft' : ''}`}>
                <p className={`${styles.paragraph}  max-w-[870px] mt-5`}>
                  Redefining Architectural Excellence with Unmatched Services. Our
                  team of visionary architects, engineers, and designers is
                  passionate about pushing boundaries, delivering bespoke
                  solutions, and exceeding expectations
                </p>
              </div>
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
              <a
                href="/services"
                type="a"
                className="py-4 px-8  font-poppins bg-[#FB9039] font-medium text-[18px] ServiceButton transition-all duration-1000  hover:text-black hover:from-white hover:to-black">
              
               Read More
              </a>

            </div>
          </section>

          <div ref={sliderRef} className="keen-slider ">
            <>
              {services.map((service, index) => (
                <div key={index} className="keen-slider__slide p-6">
                  <div
                    key={index}
                    className="m-3 relative overflow-hidden h-80 rounded-lg p-6 homeServiceBorder  bg-black bg-opacity-60 text-white flex flex-col items-center justify-center transition duration-300 transform hover:scale-105 bg-cover bg-center"
                  >
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center w-full h-full flex flex-col items-center justify-center relative"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <div className="mb-4 text-4xl text-[#FB9039]">
                        {<service.icon />}
                      </div>
                      <h3 className="text-lg text-[#FB9039] font-semibold mb-1">
                        {service.title}
                      </h3>
                      <p>{service.description}</p>
                    </a>
                    <div
                      style={{
                        backgroundImage: `url(${service.backgroundImage})`,
                      }}
                      className="absolute transform hover:scale-105 bg-cover bg-center inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"
                    ></div>
                  </div>

                </div>


              ))}

            </>

          </div>
          <div className="flex align-middle justify-center ">
            {loaded && instanceRef.current && (
              <div className="dots">
                {[
                  ...Array(instanceRef.current.track.details.slides.length - 2).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                  )
                })}
              </div>
            )}
          </div>


        </div>
      </div>
    </>
  );
};

export default Services;