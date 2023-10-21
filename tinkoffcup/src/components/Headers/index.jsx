import React from 'react';
import styles from './Headers.module.css'


function Headers(props) {
    const handleClick = () => {
        console.log("Hello");
      };
    return (
        
        <header className={styles.header}>
            <img src={props.path} alt = 'Logo'/>
            <div className={styles.lk}>
                <button type="button" onClick={handleClick} className={styles.btn}>Личный кабинет</button> 
            </div>    
        </header>
    );
}

export default Headers;