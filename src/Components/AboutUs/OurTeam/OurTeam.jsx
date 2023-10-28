import React, { useEffect, useState, useRef } from 'react';
import styles from './OurTeam.module.css';
import "../../../textRevel.css"
import { useInView } from 'react-intersection-observer';
import team1 from "../../../assets/Team/Ar. Sagar Matani.jpg"
import team2 from "../../../assets/Team/Aarti Matani .jpg"
import team3 from "../../../assets/Team/Karan Bajaj (picture 2).jpg"


const teamMembers = [
  {
    id: 1,
    name: "Mr. Sagar Nanak Matani",
    designation: "Co-Founder and Chief Architect",
    link: team1,
  },
  {
    id: 2,
    name: "Ms. Aarti Nanak Matani",
    designation: "Chief Strategy Officer (CSO)",
    link: team2
  },
  {
    id: 3,
    name: "Karan Bajaj",
    designation: "Business Development Associate",
    link: team3
  },
];

const OurTeam = () => {
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

  return (
    <>

      <div className={`py-10 w-full px-[5%]`}>
        <button data-text="Awesome" className="button mx:mx-[5%] sm:mx-[0%] nx:mx-[5%] sm:text-[2.5rem] ss:text-[2.5rem] mx:text-[1.5rem] mm:text-[1.5rem] nx:text-[1rem] ">
          <span className="actual-text">&nbsp;OUR&nbsp;TEAM&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;OUR&nbsp;TEAM&nbsp;
          </span>
        </button>
        <div ref={ref} className={`${styles.container} py-8 md:grid md:grid-cols-3  gap-x-8 gap-y-8    sm:grid   sm:grid-cols-3 mx:flex mm:flex nx:flex  `}>
          {teamMembers.map((member, index) => (
            <div
              className={` ${styles.aboutOurTeamTransition}  ${isVisible ? 'animate-fadeInDown' : ''}  ${styles.cardWrapper} lg:w-[400px] lg:h-[500px] mx:mb-2 nx:w-[200px] nx:h-[200px] md:w-[300px] md:h-[400px] sm:w-[300px] sm:h-[320px]`}
              key={member.id}
            >
              <div className={` ${styles.card}  lg:w-[400px] lg:h-[500px] mx:mb-6 mm:mb-6 nx:w-[200px] nx:h-[200px] md:w-[300px] md:h-[400px] sm:w-[300px] sm:h-[320px]`}>
                <div className={styles.cardImage}>
                  <img
                    src={member.link}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={` ${styles.details} overflow-y-scroll`}>
                  <h2 style={{ fontSize: '22px', fontWeight: 800 }}>
                    {member.name}
                    <br />
                  </h2>
                  <h3 className={styles.jobTitle}>{member.designation}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;