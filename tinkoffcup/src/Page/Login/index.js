// @flow 
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.css'
import logo from '../../img/Tinkoff 1.png';
import Header from '../../components/Headers';
import axios from 'axios'



async function logIn(data) {
    await axios.post(
        "https://tinkoff.web-gen.ru:444/api/service-auth/login",
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
            if (response.data.Code !== 200) {
                alert('Неверный логин или пароль') 
            }
            localStorage.setItem('login_profile', response.data.Result.User.login);
            localStorage.setItem('id_profile', response.data.Result.User.id);
            localStorage.setItem('accessToken', response.data.Result.accessToken);
            
            console.log(localStorage.getItem('id_profile'));
          })
        .catch(error => {
            // Обработка ошибки
            console.error(error);
          });
}
export const Login = (props) => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        logIn({"email":email,"password":password})
        const url = 'http://localhost:3000/profile'
        window.location.assign(url);
    };


    return (
        <div>
            <Header
            path = {logo}
            Name = "Главная"
            navigate = '../'
            />
        <div className={styles.auth_form_container}>
           <form className={styles.login_form } onSubmit={handleSubmit}>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Логин' id="email" name='email'/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Пароль' id="password" name='password'/>
                <div className={styles.bottom_btn}>
                    <button className={styles.button} type='submit'>Войти</button>
                    <NavLink to='../register' className={styles.link_btn}>Регистрация</NavLink>
                </div>
            </form> 
            
            
        </div>
        </div>

    );
};