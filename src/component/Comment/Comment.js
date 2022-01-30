import React from 'react';

import './CommentStyle.css'

const Comment = ({comment: {id, name, email, body, postId}}) => {
    return (
        <div className="comment">
            <div>Id: {id}</div>
            <div>PostId: {postId}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;