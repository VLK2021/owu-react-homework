import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Comment from "../Comment/Comment";
import {getAllComments} from "../../store";
import './CommentsStyle.css';

const Comments = () => {

    const {comments} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch]);

    return (
        <div className="comments">
            <h1>All Comments</h1>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;