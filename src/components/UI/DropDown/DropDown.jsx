import React, { useState } from "react";
import styles from "./DropDown.module.scss";

import DropDownItem from "./DropDown-item";

const DropDown = ({ listdata }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.Button} onClick={toggleDropdown}>
        <span>Метка</span>

        <i className={`bx ${isOpen ? "bx bx-chevron-up" : "bx-chevron-down"}`}></i>
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {listdata.map((item, index) => (
            <DropDownItem
              key={index}
              statusColor={item.statusColor}
              text={item.status}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
