import React from 'react';
import styles from './style.css'
import {ModelWindow} from '../ModelWindow';
// import { PostWinner } from '../PostWinner';


function Component(props) {
    const [isModal, setModal] = React.useState(false);
    const [bg1, setBg] = React.useState('row1')
    const [bg2, setBg2] = React.useState('row2')
    const [count,setCount] = React.useState(0);
    let [i,setI] = React.useState(0)
    const handWinner = () => {
        setBg = 'row1win'
    } 
    const handrow1 = () => {
        setI = 0
    }
    const handrow2 = () => {
        setI = 1
    }


    return (
        <div className='column'>
            <ModelWindow
            isVisible={isModal}
            title="Подтвердите победителя"
            content={
            // <PostWinner fio={props.post.nick_name} count = {props.post.count}/>
             <div className="rowPost">
                <p>ФИО: {props.post[i].nick_name} || Счёт:</p>
                <input className="count" value={count} onChange={(e)=>setCount(e.target.value)} type='number' placeholder='Счёт' id="count" name='count'/>
                <button onClick={handWinner}>Подтвердить</button>
            </div>
            }
            onClose={() => setModal(false)}
            />
            <div className={bg1} onClick={handrow1}>
                <p>ФИО: {props.post[0].nick_name}</p>
                <p>ID: {props.post[0].id}</p>
                <p>Счёт: {props.post[0].count}</p>               
            </div>
            <div className={bg2} onClick={() => setModal(true)}>
                <p>ФИО: {props.post[1].nick_name}</p>
                <p>ID: {props.post[1].id}</p>
                <p>Счёт: {props.post[1].count}</p>
            </div>
        </div>
    );
}

export default Component;