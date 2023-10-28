import "./ContactPage.css";
import styles from "../../style";
import Hero from "../Home/Hero";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from "react";
import MapAndForm  from "./Form/MapAndForm";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // The callback will only be fired once when the component enters the viewport
        threshold: 0.3, // The element is considered in view when it's 20% visible
    });
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);


    return (
        <>
            <div className={`bg-[#212121]  ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero value1={"Contact US"} value4={`"For inquiries, consultations, or to discuss your architectural projects, feel free to reach out to us. Our team of dedicated professionals is ready to assist you in turning your vision into reality. Contact us today and let us bring your architectural dreams to life."`} />

                </div>
            </div>


            <div ref={ref} className="bg-[#212121]">
                <div className={`bg-[#212121]`}>
                   
                        <MapAndForm />
         
                </div>
            </div>



        </>
    );
};

export default Contact;