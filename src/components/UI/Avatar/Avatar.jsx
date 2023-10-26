import React from 'react'
import styles from './Avatar.module.scss'


const Avatar = ({elem, online}) => {
    return <div className={styles.Avatar}>
    {elem}
    {online && <span></span>}
    
   </div> 
        

}

export default Avatar ;