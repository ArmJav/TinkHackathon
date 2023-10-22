import styles from './container.module.css'
import Headers from '../../components/Headers'
import Buttons from '../../components/Buttons'
import But from '../../components/But'
import logo from '../../img/Tinkoff 1.png'

import React from 'react';

function Profile() {  
  return (
    
    <div className={styles.App}>
      <Headers
          path = {logo}
          Name = "Главная"
          navigate = '../'
        />
      
      <div className={styles.app}>
      </div>
      <div className={styles.body}>
        <div className={styles.body_right}>
          <h1 className={styles.h1_lk}>Личный кабинет</h1>
          <div className={styles.input_name}>
            <label>Логин</label>
            <label>{localStorage.getItem('login_profile')}</label>
          </div>
          <div className={styles.input_ID}>
            <label>ID</label>
            <label>{localStorage.getItem('id_profile')}</label>
          </div>
          <div className={styles.right_button1}>
            <Buttons
            h1_text = "Статистика"
            page = "statis"
            />
            <Buttons
            h2_text = "Регистрация команды"
            />
          </div>
        </div>
        <div className={styles.body_left}>
          <h1>Список команд</h1>
          <div>
            <table>
              <tr>
                <th>Название</th>
                <th>Количество <p>человек</p></th>
              </tr>
              <tr>
                <td>Супер название</td>
                <td>4</td>
                <td>
                  <But 
                  But = "Выйти из команды"/></td>
              </tr>
              <tr>
                <td>Супер название</td>
                <td>4</td>
                <td>
                  <But 
                  But = "Выйти из команды"/></td>
              </tr>
              <tr>
                <td>Супер название</td>
                <td>4</td>
                <td>
                  <But 
                  But = "Выйти из команды"/></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
