import React from "react";
import { Home, Mail, Shuffle } from "react-feather";
import styles from "./Header.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ul>Services</ul>
        <ul>Products</ul>
        <ul>Technology</ul>
        <ul>
          <select name="About" id="about">
            <option>About</option>
            <option>About</option>
            <option>About</option>
          </select>
        </ul>
        <ul>
          {" "}
          <select name="Client" id="client">
            <option>Client</option>
            <option>About</option>
            <option>About</option>
          </select>
        </ul>
        <ul>Partner</ul>
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
