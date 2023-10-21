import React from 'react';
import styles from './style.module.css'

function Component(props) {
    return (
        <div className={styles.column}>
            <div className={styles.row1}>
                <p>Ник: {props.post.nick_name}</p>
                <p>ID: {props.post.id}</p>
            </div>
            <div className={styles.row2}>
                <p>Ник: {props.post.nick_name}</p>
                <p>ID: {props.post.id}</p>
            </div>
        </div>
    );
}

export default Component;