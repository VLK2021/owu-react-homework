import React from 'react';
import UserPostOne from "../../component/UserPostOne/UserPostOne";

const UserPostsPage = ({userPosts}) => {

    return (
        <div>
            {
                userPosts.map(userPost => <UserPostOne
                    key={userPost.id}
                    userPost={userPost}
                />)

            }
        </div>
    );
};

export default UserPostsPage;