import styles from "../../style";
import ImageSlider from "../Carousel/ImageSlider";

const Hero = ({value1,value2,value3,value4}) => {

  return (
      <section className="h-[100vh]  overflow-y-hidden">
        
        
        <ImageSlider val1={value1} val2={value2} val3={value3} val4={value4} />
  
         </section>
  );
};
export default Hero;