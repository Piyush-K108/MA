import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { AiFillHome,AiFillInfoCircle } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import {MdDesignServices} from "react-icons/md"

import styles from "./Tabber.module.css";

const Tabber = ( {navigationData, currentRoute, setCurrentRoute }) => {

  const getTabIcon = (item) => {
    switch (item) {
      case "home":
        return <AiFillHome />;
      case "about us":
        return <AiFillInfoCircle />;
      case "services":
        return <MdDesignServices />;
      case "projects":
        return <MdDesignServices />;
      case "contact us":
        return <BiSolidContact />;
      default:
        return null;
    }
  };

  return (
    <nav className={styles.tabbar}>
      {navigationData.map((item, index) => {
        const url = `/${encodeURIComponent(item.toLowerCase())}`;
        return (
          <div className={styles.tabItemContainer} key={index}>
            <Link to={url} className={styles.tabItem} onClick={() => setCurrentRoute(item)}>
              <span className={classNames([currentRoute === item && styles.tabItemActive])}>
                <span className={styles.icon}>{getTabIcon(item)}</span>
              </span>
            </Link>

          </div>
        );
      })}
    </nav>
  );
};

export default Tabber;
