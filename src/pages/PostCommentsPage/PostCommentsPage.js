import React, {useEffect, useState} from 'react';

import PostComentOne from "../../component/PostCommentOne/PostComentOne";
import {useLocation} from "react-router-dom";
import {postsService} from "../../services/posts.service";


const PostCommentsPage = () => {

    const [postComments, setPostComments] = useState([]);

    const {state} = useLocation();

    useEffect(() => {
        postsService.getComments(state.id).then(value => setPostComments([...value]))
    }, [state.id]);

    return (
        <div>
            {
                postComments.map(postComment => <PostComentOne
                    key={postComment.id}
                    postComment={postComment}
                />)
            }
        </div>
    );
};

export default PostCommentsPage;