import React, { useState } from 'react';
import styles from './TabSwitcher.module.scss'

const TabSwitcher = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);



  return (
      <div className={styles.TabSwitcher}>
        <button onClick={() => setActiveTab(1)} className={`${styles.Button} ${activeTab === 1 ? styles.Active : ''}`} >Новые ({data.newData.length})</button>
        <button onClick={() => setActiveTab(2)} className={`${styles.Button} ${activeTab === 2 ? styles.Active : ''}`} >Обработанные ({data.processedData.length})</button>
        <button onClick={() => setActiveTab(3)} className={`${styles.Button} ${activeTab === 3 ? styles.Active : ''}`} >Удаленные ({data.deletedData.length})</button>
      </div>
  );
};

export default TabSwitcher;
