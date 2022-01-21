import React from 'react';
import {Link} from "react-router-dom";

import './userStyle.css'

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className="user">
            <Link to={id.toString()}>{id}) {name} {username}</Link>
        </div>
    );
};

export default User;