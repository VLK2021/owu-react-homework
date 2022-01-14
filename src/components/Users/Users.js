import React, {useEffect, useState} from 'react';

import {userService} from "../../service.users/service.users";
import User from "../User/User";
import Form from "../Form/Form";


const Users = () => {

    const [user, setUser] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => {
                    setUser([...users])
                    setFilteredUsers([...users])
                }
            )
    }, []);

    const getFilter = (data) => {
        let filterArr = [...user]

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setFilteredUsers(filterArr)
    }


    return (
        <div>
            <Form
                getFilter={getFilter}
            />

            {
                user.map(value => <User
                    key={value.id}
                    item={value}
                />)
            }


        </div>
    );
};

export default Users;