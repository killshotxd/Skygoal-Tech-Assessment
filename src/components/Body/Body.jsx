import React from "react";
import styles from "./Body.module.css";
import Section1 from "./Section/1/Section1";
import Section2 from "./Section/2/Section2";
import Section3 from "./Section/3/Section3";
import Section4 from "./Section/4/Section4";
const Body = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <p className={styles.copy}>Copyright © 2015</p>
    </>
  );
};

export default Body;
