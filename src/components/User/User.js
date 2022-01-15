import React from 'react';

import './UserStyle.css'

const User = ({user: {id, name, username, email}}) => {

    return (
        <div className="userStyle">
            {id} {name} {username} {email}

        </div>
    );
};

export default User;