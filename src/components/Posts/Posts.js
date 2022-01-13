import React from 'react';

import './PostsStyle.css'

const Posts = ({item:{userId, id, title, body}}) => {
    return (
        <div className="posts">
            {"userId - " + userId} <br/>
            {"id - " + id} <br/>
            {"title - " + title} <br/>
            {"body - " + body} <br/>
        </div>
    );
};

export default Posts;