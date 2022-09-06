import React from "react";
import styles from "./Section3.module.css";
import one from "../../../../assets/product-description 1.png";
import two from "../../../../assets/product-description 2.png";
import three from "../../../../assets/product-description 3.png";
import { Button } from "@chakra-ui/react";
const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centerHeading}>
        <h2>Product and Service</h2>
      </div>
      <div className={styles.containers}>
        <div className={styles.one}>
          <img src={one} alt="" />
          <h3>Our Product</h3>
          <p>
            Our product is made on the base of our team's careful research and
            analyses, ranging from internet based application.
          </p>
          <div>
            <Button colorScheme="red">Read More</Button>
          </div>
        </div>

        <div className={styles.two}>
          <img src={two} alt="" />
          <h3>Our Service</h3>
          <p>
            DSI's shared service solutions focus on the front-end based software
            development, designed specifically for the banking and financial
            sectors.
          </p>
          <div>
            <Button colorScheme="red">Read More</Button>
          </div>
        </div>

        <div className={styles.three}>
          <img src={three} alt="" />
          <h3>Our Technology</h3>
          <p>
            First JAVA, runs on more than 850 million personal computers
            worldwide, and on billions of devices worldwide, including mobile
            and TV devices.
          </p>
          <div>
            <Button colorScheme="red">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
