import React, { useState } from 'react';
import styles from './Table.module.scss'

const Table = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id));
    }
  };

  const handleSelectAll = event => {
    if (event.target.checked) {
      setSelectedItems(data.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSort = () => {
    if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className={styles.table}>
      <div className={`${styles.tableRow} ${styles.tableHeader}`}>
        <div className={styles.tableCellChek}>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={selectedItems.length === data.length}
          />
        </div>
        <div className={styles.tableCell}>
          <input
            type="text"
            placeholder="Имя"
            readOnly
          />
          <button onClick={handleSort}>
            {sortOrder === 'asc' ? <i className='bx bxs-caret-up-circle'/> : <i className='bx bxs-caret-down-circle' / >}
          </button>
        </div>
        <div className={styles.tableCell}>
          <input
            type="text"
            placeholder="Номер телефона"
            readOnly
          />
          
        </div>
        <div className={`${styles.tableCellComment}`}>
          <input
            type="text"
            placeholder="Комментарии"
            readOnly
          />
        </div>
        <div className={styles.tableCell}>
          <input
            type="text"
            placeholder="Email"
            readOnly
          />
        </div>
        <div className={styles.tableCell}>
          <input
            type="text"
            placeholder="Город"
            readOnly
          />
        </div>
        <div className={styles.tableCell}>
          <input
            type="text"
            placeholder="Дата"
            readOnly
          />
        </div>
      </div>
      {sortedData.map(item => (
        <div className={styles.tableRow} key={item.id}>
          <div className={styles.tableCellChek}>
            <input
              type="checkbox"
              onChange={e => handleCheckboxChange(e, item.id)}
              checked={selectedItems.includes(item.id)}
            />
          </div>
          <div className={styles.tableCell}>{item.name}</div>
          <div className={`${styles.tableCell} ${styles.tableCellNumber}`}>{item.phone}</div>
          <div className={`${styles.tableCellComment}`}>{item.comments}</div>
          <div className={styles.tableCell}>{item.email}</div>
          <div className={styles.tableCell}>{item.city}</div>
          <div className={styles.tableCell}>{item.date}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
