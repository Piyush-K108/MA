import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Logo from "../../assets/logo/MA logo_MataniArchitects.png";
import styles from "./Navbar.module.css";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <img src={Logo} style={{ width: "150px", margin: "0px 0px 0px -40px" }} alt="Logo" />
      </span>
      <ul className={styles.navItems}>
        {navigationData.map((item, index) => {
          const url = `/${encodeURIComponent(item.toLowerCase())}`;

          return (
            <li
              className={classNames([
                styles.navItem,
                currentRoute === item && styles.selectedNavItem,
              ])}
              key={index}
            >
              <Link to={url} onClick={() => setCurrentRoute(item)}>
                {item.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
