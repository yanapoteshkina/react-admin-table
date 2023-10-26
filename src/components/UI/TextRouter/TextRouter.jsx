import React from "react";
import styles from "./TextRouter.module.scss";

const TextRouter = ({text, routerlink, activelink}) => {
    return <div className={styles.textRouter}>

        <h3>{text}</h3>
        <p><span className={styles.activeLink}>{routerlink}</span> / {activelink}</p>

    </div>
  }


export default TextRouter;
