import { Link } from "gatsby";
import React from "react";
import * as styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.siteName}>
        <Link to="/">My First Gatsby Site</Link>
      </h1>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <a href="/">Works</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            Others
          </a>
        </li>
      </ul>
      <div className={styles.social}>
        <a
          href="https://github.com/sugiats0619"
          target="_blank"
          rel="noreferrer"
        >
          <img width={32} height={32} alt="GitHub" src="/GitHub.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
