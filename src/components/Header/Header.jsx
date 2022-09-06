import React from "react";
import { Home, Mail, Shuffle } from "react-feather";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ul>Services</ul>
        <ul>Products</ul>
        <ul>Technology</ul>
        <ul>About</ul>
        <ul>Client</ul>
      </div>
      <div className={styles.right}>
        <Home />
        <Mail />
        <Shuffle />
      </div>
    </div>
  );
};

export default Header;
