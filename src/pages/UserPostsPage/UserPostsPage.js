import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserPostOne from "../../component/UserPostOne/UserPostOne";


const UserPostsPage = () => {

    const [userPosts, setUserPosts] = useState([]);

    const {state} = useLocation();

    useEffect(() => {
        userService.getPosts(state.id).then(value => setUserPosts([...value]))
    }, [state.id]);

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