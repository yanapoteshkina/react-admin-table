import React from 'react'

import styles from './SearchInput.module.scss'


const SearchInput = ({placeholder}) => {
    return <input className={styles.Input} placeholder={placeholder} /> ;
};

export default SearchInput;