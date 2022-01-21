import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from '../../services/user.service';
import User from "../../component/User/User";
import './UsersPageStyle.css';

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div className='usersPage'>
            <div className="usersPageS">
                <h1>Users:</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>

            <div><Outlet/></div>
        </div>
    );
};

export default UsersPage;