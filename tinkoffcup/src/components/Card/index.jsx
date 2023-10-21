// import * as React from 'react';
import styles from './Card.module.css'



function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.span}>
                <h1 className={styles.h1}>{props.h1_text}</h1>
                <span >{props.span}</span>
            </div>
            <img src={props.cartimg} alt='HJ' className={styles.img}/>
            
        </div>
    );
};

export default Card;