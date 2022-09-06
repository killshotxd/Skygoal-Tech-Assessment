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

      <div className={styles.footer}>
        <div className={styles.address}>
          <h3>PT Dwidasa Samsara Indonesia</h3>
          <p>
            Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323
          </p>
        </div>
        <div className={styles.contact}>
          <h2>Contact</h2>
          <p>Phone : +62.21.5314.1135</p>
          <p>Fax : +62.21.5314.1135</p>
          <p>Email : community@dwidasa.com</p>
        </div>
        <div className={styles.logo}>
          <div className={styles.up}>
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
          </div>
          <div className={styles.down}>
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
