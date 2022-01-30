import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet} from "react-router-dom";

import {getAllUsers} from "../../store";
import User from "../User/User";
import './UsersStyle.css'


const Users = () => {

    const {users} = useSelector(state => state['userReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch]);

    return (
        <div className="users">
            <h1>All Users</h1>

            <div className="users-user">{users.map(user => <User key={user.id} user={user}/>)}</div>

            <div className="users-btns">
                <Link to={"posts"}>
                    <button className="users-btns-btn">get All Posts</button>
                </Link>

                <Link to={"comments"}>
                    <button className="users-btns-btn">get All Comments</button>
                </Link>
            </div>

            <div><Outlet/></div>
        </div>
    );
};

export default Users;