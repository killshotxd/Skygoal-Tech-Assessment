import React from "react";
import styles from "./Section1.module.css";
import { Button } from "@chakra-ui/react";
import image1 from "../../../../assets/pana.svg";
const Section1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>
          Making the most of the ever-growing{" "}
          <span>Information Technology</span>{" "}
        </h1>
        <p>
          Managed by a team of professional experts with extensive experience
          and impressive track records
        </p>
        <div>
          <Button colorScheme="red">Read More</Button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={image1} alt="lol" />
      </div>
    </div>
  );
};

export default Section1;
