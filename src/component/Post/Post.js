import React from 'react';

import './PostStyle.css'

const Post = ({post: {id, title, body}}) => {
    return (
        <div className="post">
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;