import React from 'react';
import logo from '../../img/Tinkoff 1.png';
import Header from '../../components/Headers';
import Component from '../../components/Table';

function TableTournament() {
    const posts = [
        {id:1,nick_name:'name1'},
        {id:2,nick_name:'name2'},
        {id:3,nick_name:'name3'},
        {id:1,nick_name:'name1'},
        {id:2,nick_name:'name2'},
        {id:3,nick_name:'name3'},
        {id:1,nick_name:'name1'},
        {id:2,nick_name:'name2'},
    ];


    return (
        <div>
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
            </div>
        </div>
    );
}

export default TableTournament;