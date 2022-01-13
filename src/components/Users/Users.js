import React, {useEffect, useState} from 'react';

import {usersServise} from "../../services/users.service/users.servise";
import User from "../User/User";
import './UsersStyle.css';
import UserDetails from "../UserDetails/UserDetails";
import Posts from "../Posts/Posts";

const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const [user, setUser] = useState();
    const [post, setPost] = useState([]);

    useEffect(() => {
        usersServise.getAll()
            .then(users => setUsersList(users))});

    const getById = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(value => setUser(value))};

    const getPosts = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then(response => response.json())
            .then(posts => setPost(posts))};

    return (
        <div className="wraper">
            <div className="users-wrap">
                {
                    <h1>Users</h1>
                }
                {
                    usersList.map(value => <User
                        key={value.id}
                        item={value}
                        getById={getById}
                    />)
                }
            </div>
            <div className="one-user">
                {
                    <h1>User details</h1>
                }

                {
                    user && <UserDetails
                        key={user.id}
                        item={user}
                        getPosts={getPosts}
                    />
                }
            </div>
            <div className="posts-wrap">
                {<h1>Posts</h1>}
                {
                    post.map(value => <Posts
                    key={value.id}
                    item={value}
                    />)
                }
            </div>

        </div>
    );
};

export default Users;