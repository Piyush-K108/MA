import React, { useState, useEffect } from "react";
import styles from "../../../style";
import "./Founder.css"
import { useInView } from 'react-intersection-observer'
import founder from "../../../assets/Team/Founder.jpg"
const Founder = () => {
    const [expanded, setExpanded] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    let initialDisplayWords = 30; // Default word limit

    const sampleText = `A true visionary, our pathfinder and luminary, Mr. Nanak Matani has been the strongest pillar of this firm who has been instrumental in establishing and nurturing this prominent sustainable architecture studio in India. With an extensive & rooted understanding of customer needs and a comprehensive knowledge of the nerves of architecture, Mr.  Nanak Matani has authentically and aesthetically crafted a firm that is a prominent example in the industry.
    Under his expert guidance, our studio has flourished, and he has consistently been a guiding light for all our projects. From the very foundation of our firm, Mr. Nanak Matani instilled in us the values of learning, diligence, and integrity that form the core of our organisation. We are indebted and thankful for his leadership and unwavering commitment to this purpose and his unparalleled vision, which will continue being our binoculars that will help us to see ahead of the time and drive us towards excellence for all eternity.
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
        } else if (window.innerWidth <= 1024) {
            initialDisplayWords = 84; // Medium-large screen (md)
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
             if (window.innerWidth <= 320) {
                initialDisplayWords = 30; // Small screen (ss)
            }
            else if (window.innerWidth <= 480) {
                initialDisplayWords = 30; // Extra-small screen (xs)
            } else if (window.innerWidth <= 620) {
                initialDisplayWords = 60; // Small screen (ss)
            } else if (window.innerWidth <= 768) {
                initialDisplayWords = 60; // Medium screen (sm)
            } else if (window.innerWidth <= 1024) {
                initialDisplayWords = 174; // Medium-large screen (md)
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
        <div>
            <div className="p-10 pb-24 mx-auto nx:px-[3%] sm:px-[5%] md:px-[5%]  overflow-hidden text-white">
                <section>
                        <div className={`${isVisible ? 'animate-fadeInUP' : ''} sm:hidden mx:hidden mm:hidden nx:hidden md:block`}>
                            <div className="md:flex justify-left mb-10 mt-20">
                                <div className="button sm:text-[2.5rem] ss:text-[2.5rem] mx:text-[1.5rem] mm:text-[1.5rem] nx:text-[1rem]">
                                    <span className="actual-text">&nbsp;The&nbsp;Foundation&nbsp;Of&nbsp;Matani&nbsp;Architects</span>
                                    <span className="hover-text" aria-hidden="true">
                                        &nbsp;The&nbsp;Foundation&nbsp;Of&nbsp;Matani&nbsp;Architects
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`${isVisible ? 'animate-fadeInUP' : ''} md:hidden lg:hidden`}>
                            <div className="md:flex justify-center mb-10 mt-20">
                                <div className="button text-3xl sm:text-[2.5rem] ss:text-[2.5rem] mx:text-[1.5rem] mm:text-[1.5rem] nx:text-[1rem]">
                                    <span className="actual-text ">&nbsp;The&nbsp;Foundation&nbsp;</span>
                                    <span className="hover-text " aria-hidden="true">
                                    &nbsp;The&nbsp;Foundation&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>

                    <div ref={ref} className="flex flex-wrap lg:h-[100vh] xl:h-[100vh]  founderTransition shadowFounderPage bg-[#212121] rounded-lg">
                        <div className="w-full md:w-[40vw]  lg:w-5/12">
                            <img
                                src={founder}
                                className={`${isVisible ? 'animate-fadeInRight' : ''} xl:h-[1000px] lg:h-fill lg:w-fit h-auto w-full md:h-[100%] sm:rounded-l-lg nx:rounded-t-lg mx:rounded-t-lg  lg:rounded-l-lg shadow-lg dark:shadow-black/20`}
                                alt="Avatar"
                            />
                        </div>

                        <div className={` ${isVisible ? 'animate-fadeInLeft' : ''} w-full  px-[3%] py-[4%] text-left md:w-6/12 md:pl-6 lg:w-7/12`}>
                            <h5 className={`mb-6  text-xl pl-[3%] font-semibold ${styles.heading2} sm:text-2xl md:text-3xl lg:text-5xl`}>
                                Mr. Nanak Matani
                            </h5>
                            <h3 className={`mb-6  pl-[3%] font-semibold  sm:text-[1rem] md:text-[1.25rem] lg:text-[1.55rem]`}>
                                The Founder
                            </h3>

                            <p className={` text-justify  max-w-[870px] pl-[3%] mt-5 text -sm md:text-base lg:text-xl xl:text-3xl ${styles.paragraph}`}>
                                {displayedText}
                            </p>

                            {/* Show "Read More" button only on mobile devices */
                                sampleText.split(" ").length > initialDisplayWords && (
                                    <div className="text-center">
                                        <button
                                            className={`text-white bg-[#ff8138] py-2 px-4 mt-4 hover:bg-[#ff8138] hover:text-white md:block lg:hidden`}
                                            onClick={handleReadMore}
                                        >
                                            {expanded ? "Read Less" : "Read More"}
                                        </button>
                                    </div>

                                )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Founder;