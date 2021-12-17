import React from "react";
import styles from "./Button.module.css";

const Button = ({ changePage }) => (
  <button type="button" className={styles.Button} onClick={changePage}>
    Load more...
  </button>
);

export default Button;
