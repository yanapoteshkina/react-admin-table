import React from "react";
import styles from "./Button.module.scss";

const Button = ({ btnMode, title }) => {
  if (btnMode === "dark") {
    return <button className={`${styles.ButtonDark} ${styles.Button}`}>
    {title}
  </button>
   
  } else if (btnMode === "default") {
    return <button className={`${styles.ButtonDefault} ${styles.Button}`}>
    {title}
  </button>
  }
};

export default Button;
