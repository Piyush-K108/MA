import styles from "../../style";
import logo from "../../assets/logo/MA logo_MataniArchitects.png"
import { footerLinks } from "../../constants/index"
import './Footer.css'
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => (

  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>

      <img

        src={logo}
        alt="Matani"
        className=" nx:w-[80%]  mm:w-[65%]  mx:w-[70%] xs:w-[95%] ss:w-[15%]
        sm:w-[60%]  mc:w-[50%]  md:w-[33%] lg:w-[18%] xl:w-[15%]
        

        rounded-sm m-10  object-contain mt-4  mb-16 flex-start"
      />


      <div className="flex-[1] flex flex-col justify-center mb-20 mr-10">
        <p className={` text-justify font-poppins font-normal text-dimWhite text-[24px] md:text-[18px] leading-[30.8px] max-w-[612px] `}>
          From concept to reality, we transform your vision into inspiring spaces with our expertise and commitment.
        </p>
      </div>


      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] ${footerlink.title === "HEAD OFFICE" ? ' mb-3' : ''}`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className={`list-none mt-4 space-y-4 ${footerlink.title === "HEAD OFFICE" ? 'mb-10' : ''}`}>
              {footerlink.links.map((link, index) => (
                <a key={index} href={link.link}>
                  <li
                    key={link.name}

                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-[#FB9039] cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                  >

                    {footerlink.title === "HEAD OFFICE" && <link.icon className="inline-block mr-2" />}
                    {link.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>;
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col text-dimWhite  pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Matani Architect. All Rights Reserved.
      </p>




      <div className="flex flex-row md:mt-0 mt-6 space-x-4 social-icon overflow-x-hidden overflow-y-hidden">

        {/* benance */}

        <svg
          xmlns="http://www.w3.org/2000/svg"

          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#3943ff] overflow-x-hidden  }`}
          onClick={() => window.open('https://www.behance.net/MataniArchitects')}

          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
        </svg>


        {/* facebook */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#1877F2] overflow-x-hidden  }`}
          onClick={() => window.open('https://www.facebook.com/mataniarchitects/')}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />

        </svg>



        {/* whatsapp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#25D366] overflow-x-hidden  }`}
          onClick={() => window.open('https://wa.me/919770022850 ')}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>

        {/* twitter */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#1DA1F2] overflow-x-hidden  }`}
          onClick={() => window.open('https://twitter.com/mataniarch')}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>

        {/* pin */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#ff3737] overflow-x-hidden  }`}
          onClick={() => window.open('https://in.pinterest.com/mataniarchitects/')}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path fill="currentColor" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" /></svg>

        {/*  linkdin*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#3f65ff] overflow-x-hidden  }`}
          onClick={() => window.open('https://www.linkedin.com/company/mataniarchitects/')}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

        {/* insta */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#C13584] overflow-x-hidden  }`}
          onClick={() => window.open('https://www.instagram.com/mataniarchitects')}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>

        {/* houzz */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#00ff22] overflow-x-hidden  }`}
          onClick={() => window.open('https://www.houzz.in/professionals/architects-and-building-designers/matani-architects-pfvwin-pf~1799140762')}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path fill="currentColor" d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" /></svg>

        {/* youtube */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[25px] h-[21px]  cursor-pointer text-dimWhite hover:text-[#FF0000] overflow-x-hidden  }`}
          onClick={() => window.open('https://www.youtube.com/channel/UCWxhI5IauerTX82WKtTB6EA')}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.fill = 'currentColor';
          }}
          viewBox="0 0 576 512"
        >
          <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>


      </div>
    </div>
  </section>



);

export default Footer;