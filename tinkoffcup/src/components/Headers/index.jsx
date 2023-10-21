import React from 'react';
import styles from './Headers.module.css'
import { NavLink } from 'react-router-dom';


function Headers(props) {
    
    return (
        
        <header className={styles.header}>
            <img src={props.path} alt = 'Logo'/>
            <div className={styles.lk}>
                <NavLink  to= {props.navigate} className={styles.btn}>{props.Name}</NavLink> 
            </div>    
        </header>
    );
}

export default Headers;