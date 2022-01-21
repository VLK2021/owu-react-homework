import React from 'react';
import {Link} from "react-router-dom";

import './PostStyle.css'

const Post = ({post}) => {
    const {title, id} = post;
    return (
        <div className="post">
            <Link to={id.toString()}>Title - {title}</Link>
        </div>
    );
};

export default Post;