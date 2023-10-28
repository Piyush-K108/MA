import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useNavigation from "./useNavigation";
import navComponent from "./navComponent";
import Navbar from "./Navbar";
import Tabbar from "./Tabber/Tabber.jsx";
import Logo from "../../assets/logo/MA logo_MataniArchitects.png";
import styles from "./App.module.css";

const App = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();
  const navigate = useNavigate();

  // Update the route based on the URL when the component mounts
  useEffect(() => {
    const currentPath = decodeURIComponent(window.location.pathname.substring(1));
    if (currentPath && currentPath !== currentRoute) {
      setCurrentRoute(currentPath.toLowerCase()); // Convert to lowercase and set in the state
    }
  }, [currentRoute, setCurrentRoute]);

  // Handle navigation item click
  const handleNavigationClick = (item) => {
    const lowerCaseItem = item.toLowerCase(); // Convert to lowercase
    setCurrentRoute(lowerCaseItem);
    navigate(`/${encodeURIComponent(lowerCaseItem)}`);
  };

  return (
    <div className={styles.container}>
      <Navbar navigationData={navComponent} currentRoute={currentRoute} setCurrentRoute={handleNavigationClick} />
      <div className="flex tabbar z-{-10}  justify-center items-center">
        <Tabbar navigationData={navComponent} currentRoute={currentRoute} setCurrentRoute={handleNavigationClick} />
      </div>
    </div>
  );
};

export default App;
