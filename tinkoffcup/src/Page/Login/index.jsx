// @flow 
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.css'
import logo from '../../img/Tinkoff 1.png';
import Header from '../../components/Headers'

export const Login = (props) => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)

    }

    return (
        <div>
            <Header
            path = {logo}
            Name = "Главная"
            navigate = '../'
            />
        <div className={styles.auth_form_container}>
           <form className={styles.login_form } onSubmit={handleSubmit}>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Логин' id="email" name='email'/>
                <input value={password} onChange={(e)=>setPassword(e.target.password)} type='password' placeholder='Пароль' id="password" name='email'/>
                
            </form> 
            <div className={styles.bottom_btn}>
                <button className={styles.button} type='submit'>Войти</button>
                <NavLink to='../register' className={styles.link_btn}>Регистрация</NavLink>
            </div>
            
            
        </div>
        </div>

    );
};