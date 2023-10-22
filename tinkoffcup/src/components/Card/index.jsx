// import * as React from 'react';
import styles from './Card.module.css'



function Card(props) {
    const handleClick = () => {
        const url = 'http://localhost:3000/' + props.page
        window.location.assign(url);
        console.log("Hello");
      };
    return (
        <div className={styles.card} onClick={handleClick}>
            <div className={styles.span}>
                <h1 className={styles.h1}>{props.h1_text}</h1>
                <p>{props.span}</p>
            </div>
            <img src={props.cartimg} alt='HJ' className={styles.img}/>
            
        </div>
    );
};

export default Card;