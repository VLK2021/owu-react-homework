import React, {useEffect, useState} from 'react';
import {useParams, Link, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserDetails from "../../component/UserDetails/UserDetails";
import './SingleUserPageStyle.css';

const SingleUserPage = () => {
    const {id} = useParams()

    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}))
    }, [id]);


    return (
        <div>
            <div>{user && <UserDetails key={user.id} user={user}/>}</div>

            <Link to={'posts'} state={{id}}>
                <button className="postsBtn">Posts</button>
            </Link>

            <div><Outlet/></div>
        </div>
    );
};

export default SingleUserPage;