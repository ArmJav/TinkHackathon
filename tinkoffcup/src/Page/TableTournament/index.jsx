import React from 'react';
import logo from '../../img/Tinkoff 1.png';
import Header from '../../components/Headers';
import Component from '../../components/Table';
import cl from './TableTour.module.css'

function TableTournament() {
    const posts = [
        [{id:1,nick_name:'name1'},
        {id:2,nick_name:'name2'}],
        [{id:3,nick_name:'name3'},
        {id:4,nick_name:'name4'}],
        [{id:5,nick_name:'name5'},
        {id:6,nick_name:'name6'}],
        [{id:7,nick_name:'name7'},
        {id:8,nick_name:'name8'}]
    ];


    return (
        <div className={cl.main}>
            <Header
            path = {logo}
            Name = "Главная"
            navigate = '../'
            />
            <div>
                <h1>Турнирная таблица</h1>
                <div>
                    {posts.map(post =>
                        <Component post = {post} key = {post.id}/>)}
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default TableTournament;