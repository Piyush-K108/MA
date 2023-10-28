import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // The callback will only be fired once when the component enters the viewport
    threshold: 0.3, // The element is considered in view when it's 20% visible
  });
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      const experienceInterval = setInterval(() => {
        setExperience((prevExperience) => {
          if (prevExperience >= 1000) {
            clearInterval(experienceInterval);
            return 1000; // Stop at 1000
          }
          return prevExperience + 12;
        });
      }, 30);
  
      const clientsInterval = setInterval(() => {
        setClients((prevClients) => {
          if (prevClients >= 70) {
            clearInterval(clientsInterval);
            return 70; // Stop at 70
          }
          return prevClients + 3;
        });
      }, 50);
  
      const projectsInterval = setInterval(() => {
        setProjects((prevProjects) => {
          if (prevProjects >= 49) {
            clearInterval(projectsInterval);
            return 49; // Stop at 49
          }
          return prevProjects + 2;
        });
      }, 70);
  
      return () => {
        clearInterval(experienceInterval);
        clearInterval(clientsInterval);
        clearInterval(projectsInterval);
      };
    }
  }, [inView]);

  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);


  return (

    <div ref={ref} class=" my-24 mx-auto md:px-6">

      <section class="mb-32 text-center">
        <h2 class={`${isVisible?"animate-fadeInUP":""} mb-20 text-[28px] text-white font-bold`}>Why is it so great?</h2>

        <div class="grid lg:grid-cols-3 lg:gap-x-12">

          <div class={`${isVisible?"animate-fadeInLeft":""} statsTransition shadowStatsPage mb-16 lg:mb-0`}>
            <div
              class="block h-full rounded-lg bg-dimWhite shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="flex justify-center">
                <div class="-mt-8 inline-block rounded-full bg-[#e77034f3] p-4 text-primary shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="h-7 w-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                  +{experience}
                </h3>
                <h6 class="statsTransition shadowStatsPage mb-4 text-lg font-medium">Years Of Experience</h6>
                <p class="text-neutral-500 dark:text-neutral-300">
                  With extensive industry knowledge, we deliver aesthetically pleasing and functional architectural solutions.

                </p>
              </div>
            </div>
          </div>


          <div class="mb-16 lg:mb-0">
            <div
              class="block h-full rounded-lg bg-dimWhite shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="flex justify-center">
                <div class="-mt-8 inline-block rounded-full bg-[#e77034f3] p-4 text-primary shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="h-7 w-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                  +{clients}
                </h3>
                <h6 class="mb-4 text-lg font-medium">Happy Clients</h6>
                <p class="text-neutral-500 dark:text-neutral-300">
                  Many satisfied clients trust our services

                </p>
              </div>
            </div>
          </div>

          <div className="statsTransition shadowStatsPage ">
            <div
              class={`block h-full rounded-lg  ${isVisible?"animate-fadeInRight":""} bg-dimWhite shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}>
              <div class="flex justify-center">
                <div class="-mt-8 inline-block rounded-full bg-[#e77034f3] p-4 text-primary shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="h-7 w-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                  +{projects}
                </h3>
                <h6 class="mb-4 text-lg font-medium">Projects Completed</h6>
                <p class="text-neutral-500 dark:text-neutral-300">
                  Our core strength lies in our ability to seamlessly blend creativity, innovation, and technical expertise, we surpass expectations and set new benchmarks, delivering exceptional results.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>

  )
}

export default Stats
