import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import PostDetails from "../../component/PostDetails/PostDetails";
import './SinglePostPageStyle.css';

const SinglePostPage = ({setPostComments}) => {

    const {id} = useParams();

    const [post, setPost] = useState(null)

    useEffect(() => {
        postsService.getByIdP(id).then(value => setPost({...value}));
    }, [id]);


    useEffect(() => {
        postsService.getComments(id).then(value => setPostComments([...value]))
    }, [id, setPostComments]);


    return (
        <div className="SinglePostPage">
            <div>{post && <PostDetails key={post.id} post={post}/>}</div>

            <Link to={'comments'}>
                <button className="commentsBtn">Comments</button>
            </Link>

            <div><Outlet/></div>
        </div>
    );
};

export default SinglePostPage;