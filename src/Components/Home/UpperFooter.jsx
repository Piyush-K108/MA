import styles from "../../style";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
const UpperFooter = () => {
  const navigate = useNavigate();

  return (
    <div className=" border-t-[2px] border-t-[#444444]">
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <a className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>NEED A SOLUTION FROM US?</h2>
          <p
            className={` text-justify ${styles.paragraph} max-w-[870px]  mt-5`}
          >
            For inquiries, consultations, or to discuss your architectural
            projects, feel free to reach out to us. Our team of dedicated
            professionals is ready to assist you in turning your vision into
            reality. Contact us today and let us bring your architectural dreams
            to life.
          </p>
        </a>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <a
            href="/contact us"
            type="a"
            className={`mx-2  shadow-lg xl:shadow-2xl    hover:shadow-zinc-900inset-white bg-slate-200 font-bold border-b-slate-950 rounded-full text-[#212121] cursor-pointer inline-block font-robert  text-lg line-normal m-0 min-h-12 min-w-0 px-12 py-3 text-center transition-transform transform translate-y-0 hover:text-white  hover:bg-[#FB9039] hover:shadow-md hover:-translate-y-2 active:shadow-none active:translate-y-0`}
          >
            Contact US
          </a>
        </div>
      </section>
    </div>
  );
};

export default UpperFooter;
