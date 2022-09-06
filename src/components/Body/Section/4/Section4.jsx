import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import styles from "./Section4.module.css";
import avat from "../../../../assets/avatar.svg";
const Section4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Mobile Specialist</h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={avat} alt="" />
          <p>System Analyst</p>
          <h3>Rodney Stratton</h3>
          <div className={styles.logos}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>

        <div className={styles.card}>
          <img src={avat} alt="" />
          <p>System Analyst</p>
          <h3>Rodney Stratton</h3>
          <div className={styles.logos}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>

        <div className={styles.card}>
          <img src={avat} alt="" />
          <p>System Analyst</p>
          <h3>Rodney Stratton</h3>
          <div className={styles.logos}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>

        <div className={styles.card}>
          <img src={avat} alt="" />
          <p>System Analyst</p>
          <h3>Rodney Stratton</h3>
          <div className={styles.logos}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
