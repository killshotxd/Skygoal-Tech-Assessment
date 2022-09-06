import React from "react";
import styles from "./Section2.module.css";
const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="" alt="img" />
      </div>
      <div className={styles.right}>
        <h2>
          Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span>
        </h2>
        <p>
          Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the
          founders, who each of them has a common end objective to innovate new
          creations by making the most of the ever-growing information
          technology through <span>DSI's</span> distinct front-end based
          application concept.
        </p>
        <p>
          Managed by a team of professional experts with extensive experience
          and impressive track records, believes that continuous improvements
          and innovations assure your business to run effectively and
          efficiently.
        </p>
      </div>
    </div>
  );
};

export default Section2;
