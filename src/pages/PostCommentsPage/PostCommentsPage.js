import React from 'react';
import PostComentOne from "../../component/PostCommentOne/PostComentOne";

const PostCommentsPage = ({postComments}) => {
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