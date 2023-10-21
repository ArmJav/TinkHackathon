// @flow 
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Registration.module.css';
import logo from '../../img/Tinkoff 1.png';
import Header from '../../components/Headers'

export const Registration = (props) => {

    const [email,setEmail] = React.useState('');
    const [FIO,setFIO] = React.useState('');
    const [date_start,setDate_start] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [password_re,setPasswordRe] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        console.log(password_re)

    }

    return (
        <div>
            <Header
            path = {logo}
            Name = "Главная"
            navigate = '../'
            />
        <div className={style.auth_form_container}>
           <form className={style.register_form } onSubmit={handleSubmit}>
                <h1>Регистрация</h1>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' id="email" name='email'/>
                <input value={FIO} onChange={(e)=>setFIO(e.target.value)} placeholder='ФИО' id="FIO" name='FIO'/>
                <input value={date_start} onChange={(e)=>setDate_start(e.target.value)} type='date' placeholder='date_start' id="date_start" name='date_start'/>
                <input value={password} onChange={(e)=>setPassword(e.target.password)} type='password' placeholder='Пароль' id="password" name='email'/>
                
                <input value={password_re} onChange={(e)=>setPasswordRe(e.target.password_re)} type='password' placeholder='Повторите пароль' id="password_re" name='email'/>
            </form> 
            <div className={style.bottom_btn}>
                <button className= {style.button}type='submit'>Регистрация</button>
                <NavLink to='../login' className={style.link_btn}>Уже есть аккаунт?</NavLink>
            </div>
        </div>
        </div>
    );
};