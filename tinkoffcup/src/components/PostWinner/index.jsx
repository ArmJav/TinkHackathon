// @flow 
import * as React from 'react';
import cl from './PostWinner.module.css'
export const PostWinner = (props) => {
    const [count,setCount] = React.useState(0);
    return (
        <div>
            <div className={cl.row}>
                <p>ФИО: {props.fio} </p>
                <input className={cl.count} value={count} onChange={(e)=>setCount(e.target.value)} type='number' placeholder='Счёт' id="count" name='count'/>
                <button>Подтвердить</button>
            </div>
        </div>
    );
};