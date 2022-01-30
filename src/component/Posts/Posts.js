import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Post from "../Post/Post";
import './PostsStyle.css'
import {getAllPosts} from "../../store";


const Posts = () => {

    const {posts} = useSelector(state => state['postReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
        <div className="posts">
            <h1>All Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;