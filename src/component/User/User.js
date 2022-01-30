import React from 'react';

import './UserStyle.css';

const User = ({user: {id, name, username, email}}) => {
    return (
        <div>
            <div className="user">
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
            </div>

        </div>
    );
};

export default User;