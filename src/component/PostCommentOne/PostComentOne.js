import React from 'react';

import './PostComentOneStyle.css';

const PostComentOne = ({postComment}) => {

    const {postId, id, name, email, body} = postComment;
    return (
        <div className="PostComentOne">
            <div>PostId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostComentOne;