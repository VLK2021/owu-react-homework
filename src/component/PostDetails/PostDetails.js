import React from 'react';

import './PostDetailsStyle.css'

const PostDetails = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div className="PostDetails">
            <h1>Post details:</h1>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default PostDetails;