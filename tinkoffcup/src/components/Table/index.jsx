import React from 'react';
import styles from './style.module.css'
import {ModelWindow} from '../ModelWindow';
import Card from '../Card';

function Component(props) {
    const [isModal, setModal] = React.useState(false);
    return (
        <div className={styles.column}>
            <ModelWindow
            isVisible={isModal}
            title="Modal Title"
            content={<p>Hello</p>}
            onClose={() => setModal(false)}
            />
            <div className={styles.row1} onClick={() => setModal(true)}>
                <p>Ник: {props.post.nick_name}</p>
                <p>ID: {props.post.id}</p>
            </div>
            <div className={styles.row2} onClick={() => setModal(true)}>
                <p>Ник: {props.post.nick_name}</p>
                <p>ID: {props.post.id}</p>
            </div>
        </div>
    );
}

export default Component;