import React from 'react';

import './UserPostOneStyle.css'

const UserPostOne = ({userPost}) => {

    const {userId, id, title, body} = userPost;

    return (
        <div className="UserPostOne">
            <div>userId - {userId}</div>
            <div>id - {id}</div>
            <div>title - {title}</div>
            <div>body - {body}</div>
        </div>
    );
};

export default UserPostOne;