import React from 'react';

import './UserStyle.css';

const User = ({item, getById}) => {

    return (
        <div className="user-wrap">
            {item.id} -- {item.name} -- {item.username} -- {item.email}

            <button onClick={() => getById(item.id)}>GetDetails</button>
        </div>
    );
};

export default User;