// import * as React from 'react';
import styles from './But.module.css'

function But(props) {
    const handleClick = () => {
        console.log("Hello");
      };
    return (
        <div className={styles.card_2} onClick={handleClick}>
            <div className={styles.span}>
                <h2 className={styles.h2}>{props.But}</h2>
            </div>            
        </div>
        
    );
};

export default But;