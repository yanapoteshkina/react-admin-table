import React from 'react'
import styles from './DropDown.module.scss'

const DropDownItem = ({statusColor, text}) => {

    const ItemStatus = {
        backgroundColor: statusColor,
        borderRadius: '100%',
        cursor: 'pointer',
        width: '10px',
        height: '10px',
        border: '1px solid white'
      };

    return <li className={styles.DropDownItem}>

        <div style={ItemStatus} ></div> <span className={styles.ItemText}>{text}</span>

    </li>

 
   
  };


export default DropDownItem;

