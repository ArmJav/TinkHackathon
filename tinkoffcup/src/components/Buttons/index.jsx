// import * as React from 'react';
import styles from './Buttons.module.css'

function Buttons(props) {
    const handleClick = () => {
        const url = 'http://localhost:3000/' + props.page
        window.location.assign(url);
        console.log("Hello");
      };
    return (
        <div className={styles.card} onClick={handleClick}>
            <div className={styles.span}>
                <h1 className={styles.h1}>{props.h1_text}</h1>
                <h2 className={styles.h1}>{props.h2_text}</h2>
            </div>            
        </div>
        
    );
};

export default Buttons;