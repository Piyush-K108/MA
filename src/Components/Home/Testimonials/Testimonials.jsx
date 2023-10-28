import { useEffect, useState } from "react";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import { useInView } from 'react-intersection-observer';
import { monials } from "../../../constants/Testimonials";
const BlockquoteComponent = ({ monial, index }) => {
  const renderIcons = (index) => {
    const icons = [];
    for (let i = 0; i < monials[index].number; i++) {
      const icon = (
        <svg
          key={i}
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
      icons.push(icon);
    }
    return icons;
  };
  return (
    <div className="keen-slider__slide">
       <blockquote className="flex h-full flex-col justify-between bg-white pt-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-yellow-400">{renderIcons(index)}</div>
          <div className="mt-4">
            {/* <p className="text-2xl font-bold text-[#F26722] sm:text-3xl">{monial.title}</p> */}
            <p className="mt-4 leading-relaxed text-gray-700">{monial.Discription}</p>
          </div>
        </div>
        {/* <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">&mdash; {monial.author}</footer> */}
      </blockquote>
    </div>
  );
};
const Testimonials = () => {
  const animation = { duration: 50000, easing: (t) => t };

  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      renderMode: "performance",
      drag: true,
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      dragStart(s) {
        // Pause the slider animation when dragging starts
        s.pause();
      },
      dragEnd(s) {
        // Resume the slider animation when dragging ends
        s.unpause();
        // Ensure the slider is in the correct position after dragging ends
        const slideIndex = Math.round(s.details().progressNormalized * (s.details().size - 1));
        s.moveToSlide(slideIndex);
      },
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
        "(min-width: 700px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());

    keenSliderPreviousDesktop.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());
    return () => {
      keenSlider.destroy();
    };
  }, []); // Empty dependency array means this will run once when the component mounts.


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

    <div>

      <section className="Testimonials py-[2%] bg-black bg-opacity-10  z-10">
        <link
          href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
          rel="stylesheet"
        />
        <div ref={ref}>
          <div
            className={` m-auto  px-4  sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24`}
          >
             <div className="grid grid-cols-1 md:grid-cols-3 md:items-center md:gap-16 p-5 mm:p-0 nx:p-0 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
              <div className={`${isVisible ? 'animate-fadeInRight' : ''} max-w-xl sm:px-[5%] mx:p-[7.5%] mm:p-[7.5%] nx:p-[7.5%] sm:max-w-5xl sm:text-justify ltr:sm:text-left rtl:sm:text-right`}>
                <h2 className="text-3xl  font-bold tracking-tight text-dimWhite sm:text-4xl">
                  Don&apos;t just take our word for it...
                </h2>

                <p className="mt-4 font-poppins font-normal text-dimWhite  text-white mx:text-[.9rem] mm:text-[.89rem] nx:text-[.84rem] mx:text-justify mm:text-justify nx:text-justify  ">
                  Discover the heartfelt words of our satisfied clients as they share their extraordinary experiences and rave about the exceptional services and exceptional results we deliver.

                </p>

                <div className="hidden   lg:mt-8 lg:flex justify-center lg:gap-4">
                  <button
                    aria-label="Previous slide"
                    id="keen-slider-previous-desktop"
                    className="rounded-full border border-[#F26722] p-3 text-[#F26722] transition hover:bg-[#F26722] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="Next slide"
                    id="keen-slider-next-desktop"
                    className="rounded-full border border-[#F26722] p-3 text-[#F26722] transition hover:bg-[#F26722] hover:text-white"
                  >
                    <svg
                      className="h-5 w-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className={`${isVisible ? 'animate-fadeInLeft duration-[2000]' : ''} mx-6 lg:col-span-2  lg:mx-9`}>
                <div id="keen-slider" className="keen-slider ">

                  {monials.map((monial, index) => (
                    <BlockquoteComponent index={index} monial={monial} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-[#F26722] p-4 text-[#F26722] transition hover:bg-[#F26722] hover:text-white"
              >
                <svg
                  className="h-5 w-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-[#F26722] p-4 text-[#F26722] transition hover:bg-[#F26722] hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;