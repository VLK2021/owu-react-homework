import React from 'react';
import {Link} from "react-router-dom";

import './userStyle.css'

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div className="user">
            <div>{id}) {name} {username}</div>

            <Link to={id.toString()}>
                <button className={'userBtn'}>User details</button>
            </Link>
            <Link to={`${id.toString()}/albums`} state={{id}}>
                <button className={'userBtn'}>Alboms</button>
            </Link>

        </div>
    );
};

export default User;