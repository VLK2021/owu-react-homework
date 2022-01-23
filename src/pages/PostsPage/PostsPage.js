import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.service";
import Post from "../../component/Post/Post";
import {Outlet} from "react-router-dom";
import './PostsPageStyle.css';

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAllP().then(value => setPosts([...value]))
    }, []);

    return (
        <div className="postsPage">
            <div className="postsPage-block">
                <h1>Posts:</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;