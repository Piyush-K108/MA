import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Components/Home/Footer'
import AboutUS from './Components/AboutUs/AboutUS';
import UpperFooter from './Components/Home/UpperFooter'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home';
import styles from '../src/style'
import NavApp from './Components/Navbar/NavApp'
import ScrollToTop from './Components/ScrollTop';
import { mataniProjects } from './constants/Projects.js';
import OurServices from './Components/Servises/OurServices/OurServices.jsx';
import Projects from './Components/AboutUs/Projects/Projects.jsx';
const App = () => (
  <Router>
    <div className='bg-[#212121]'>

      <ScrollToTop/>

    <div className="  w-[100%]  ">
     <div className={`bg-[#a3a7b1]  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavApp />  
       
      </div>
    </div>
    </div>
  
    
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />

    <Route path="/About US" element={<AboutUS />} />
    <Route path="/Contact US" element={<Contact />} />
    <Route path="/services" element={<OurServices />} />
    <Route path="/projects" element={<Projects />} />

  </Routes>

  <div className={`bg-[#212121] flex-col   nx:bg-gradient-to-bl nx:from-[#212121] nx:to-[#fff4]    ss:bg-gradient-to-bl ss:from-[#212121] ss:to-[#fff1]  ${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>
  <UpperFooter />
  </div>
  <Footer/>
  </div>
 
  </div>

  </Router>
);

export default App;

