import React, { useState, useEffect } from "react";
import img from "../../../assets/replicate.png"
import "./Company.css"
import styles from "../../../style";
import { useInView } from 'react-intersection-observer';
const Company = () => {
    const [expanded, setExpanded] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    let initialDisplayWords = 50; // Default word limit
    const sampleText = `An esteemed architecture studio that prides itself to be one of the finest on its commitment to sustainability and minimalism. Established in 2019 by our monarch & trailblazer Mr. Nanak Matani Ji, our studio is dedicated to providing exceptional outputs while remaining true to our pledge. Hailing from India, a culturally rich and renowned architecture hub, we strive to offer a 360-degree architecture and interior designing experience with a focus on serving our clients with serendipity.

    At Matani Architects, we maintain an unwavering enthusiasm for continuous learning and keep ourselves up-to-date with the latest trends in architecture and design, including past, present, and future possibilities. Our approach involves analyzing and executing projects through the lens of our clients' vision, enabling us to deliver bespoke solutions. Our team comprises next-generation architects, engineers, and designers who possess exceptional vision, visualization, and work ethic. We are proud to offer our clients unparalleled service and expertise.
 `;
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: false, // The callback will only be fired once when the component enters the viewport
        threshold: 0.2, // The element is considered in view when it's 20% visible
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);



    useEffect(() => {
        // Update initialDisplayWords based on screen size
        if (window.innerWidth <= 480) {
            initialDisplayWords = 30; // Extra-small screen (xs)
        } else if (window.innerWidth <= 620) {
            initialDisplayWords = 60; // Small screen (ss)
        } else if (window.innerWidth <= 768) {
            initialDisplayWords = 60; // Medium screen (sm)
        } else if (window.innerWidth <= 1060) {
            initialDisplayWords = 284; // Medium-large screen (md)
        } else if (window.innerWidth <= 1200) {
            initialDisplayWords = 284; // Large screen (lg)
        } else {
            initialDisplayWords = 284; // Extra-large screen (xl)
        }

        if (expanded) {
            setDisplayedText(sampleText);
        } else {
            setDisplayedText(sampleText.split(" ").slice(0, initialDisplayWords).join(" ") + "");
        }

        // Add an event listener to handle window resize
        const handleWindowResize = () => {
            // Recalculate initialDisplayWords when the window resizes
            if (window.innerWidth <= 480) {
                initialDisplayWords = 30; // Extra-small screen (xs)
            } else if (window.innerWidth <= 620) {
                initialDisplayWords = 60; // Small screen (ss)
            } else if (window.innerWidth <= 768) {
                initialDisplayWords = 60; // Medium screen (sm)
            } else if (window.innerWidth <= 1060) {
                initialDisplayWords = 284; // Medium-large screen (md)
            } else if (window.innerWidth <= 1200) {
                initialDisplayWords = 284; // Large screen (lg)
            } else {
                initialDisplayWords = 284; // Extra-large screen (xl)
            }
        };

        window.addEventListener("resize", handleWindowResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [expanded]);

    const handleReadMore = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="   ss:block  nx:px-[3%] text-dimWhite py-8">


                <div ref={ref} className=" mx-[5%] ">
                    <div className={`${isVisible ? 'animate-fadeInUP' : ''} `}>
                        <div className="md:flex justify-left mb-10 mt-20">
                            <div className="button button text-3xl sm:text-[2.5rem] ss:text-[2.5rem] mx:text-[1.5rem] mm:text-[1.5rem] nx:text-[1rem]">
                                <span className="actual-text">&nbsp;Matani&nbsp;Architects</span>
                                <span className="hover-text" aria-hidden="true">
                                    &nbsp;Matani&nbsp;Architects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card2 shadowCompanyPage companyTransition bg-[#212121] sm:mx-[5%]  mx:p-7 md:h-full h-auto m-auto md:w-[90%] xl:max-w-[90%] lg:flex md:flex lg:flex-row lg:p-0 md:flex-col-reverse ">


                    <div className={` ${isVisible ? 'animate-fadeInRight' : ''} w-full mm:p-5 nx:p-5 lg:px-[3%]  text-left  md:pl-6 lg:w-7/12`}>


                        <p className={`text-justify md:px-8 max-w-[100%] p-0  lg:px-[3%] text-sm md:text-base lg:text-xl text-dimWhite ${styles.paragraph}`}>
                            {displayedText}
                        </p>

                        {/* Show "Read More" button only on mobile devices */
                            sampleText.split(" ").length > initialDisplayWords && (
                                <div className="text-center md:hidden">
                                    <button
                                        className={`text-white bg-[#ff8138] py-2 px-4 mt-4 hover:bg-[#ff8138] hover:text-white md:hidden`}
                                        onClick={handleReadMore}
                                    >
                                        {expanded ? "Read Less" : "Read More"}
                                    </button>
                                </div>

                            )}
                    </div>
                    <div className="  lg:w-5/12">
                        <img
                            src={img}
                            className={`${isVisible ? 'animate-fadeInLeft' : ''}  lg:h-auto sm:first-letter sm:h-[50vh] md:hidden lg:block sm:hidden mx:hidden mm:hidden nx:hidden lg:w-full md:h-[80%] shadow-lg dark:shadow-black/20 lg:rounded-r-lg`}
                            alt="Avatar"
                        />
                    </div>
                </div>
            </div>




        </>
    )
}

export default Company;
