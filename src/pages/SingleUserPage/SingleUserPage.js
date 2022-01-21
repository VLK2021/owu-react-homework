import React, {useEffect, useState} from 'react';
import {useParams, Link, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserDetails from "../../component/UserDetails/UserDetails";
import './SingleUserPageStyle.css';

const SingleUserPage = ({setUserPosts}) => {
    const {id} = useParams()

    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}))
    }, [id]);


    useEffect(() => {
        userService.getPosts(id).then(value => setUserPosts([...value]));
    }, [id, setUserPosts]);


    return (
        <div>
            <div>{user && <UserDetails key={user.id} user={user}/>}</div>

            <Link to={'posts'}>
                <button className="postsBtn">Posts</button>
            </Link>

            <div><Outlet/></div>
        </div>
    );
};

export default SingleUserPage;