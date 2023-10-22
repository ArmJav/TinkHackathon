// @flow 
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Registration.module.css';
import logo from '../../img/Tinkoff 1.png';
import Header from '../../components/Headers'
import axios from 'axios';


async function SingUP(data) {
    const response = await axios.post(
        "https://tinkoff.web-gen.ru:444/api/service-auth/signup",
        data,
        {
            'Content-Type':'application/json',
            'Accept':'*/*',
            'Accept-Encoding':'gzip, deflate, br',
            'Connection':'keep-alive'
        }
        )
        .then(response => {
            // Обработка успешного ответа
            console.log(response.data);
          })
          .catch(error => {
            // Обработка ошибки
            console.error(error);
          });
}

export const Registration = (props) => {

    const [email,setEmail] = React.useState('');
    const [FIO,setFIO] = React.useState('');
    const [login,setLogin] = React.useState('');
    const [sity,setSity] = React.useState('');
    const [date_start,setDate_start] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [password_re,setPasswordRe] = React.useState('');
    
    const handleSubmit = (e) => {

        let result = Date.parse(date_start) /1000;
        e.preventDefault();
        const fiosplit = FIO.split(' ')
        SingUP(
            {"name":fiosplit[0],
            "surname":fiosplit[1],
            "patronymic":fiosplit[2],
            "email":email,
            "login":login,
            "password":password,
            "birthday": result,
            "city":sity
            }
        )
        const url = 'http://localhost:3000/profile'
        window.location.assign(url);

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
                <input value={login} onChange={(e)=>setLogin(e.target.value)} type='text' placeholder='Логин' id="login" name='login'/>
                <input value={FIO} onChange={(e)=>setFIO(e.target.value)} placeholder='ФИО' id="FIO" name='FIO'/>
                <input value={date_start} onChange={(e)=>setDate_start(e.target.value)} type='date' placeholder='date_start' id="date_start" name='date_start'/>
                <input value={sity} onChange={(e)=>setSity(e.target.value)} type='text' placeholder='Город' id="sity" name='sity'/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Пароль' id="password" name='password'/>
                <input value={password_re} onChange={(e)=>setPasswordRe(e.target.value)} type='password' placeholder='Повторите пароль' id="password_re" name='password_re'/>
                <div className={style.bottom_btn}>
                    <button className={style.button} type='submit'>Регистрация</button>
                    <NavLink to='../login' className={style.link_btn}>Уже есть аккаунт?</NavLink>
                </div>
            </form> 
            
        </div>
        </div>
    );
};