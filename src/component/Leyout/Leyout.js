import React from 'react';
import css from "../../App.module.css";
import {Outlet, NavLink} from "react-router-dom";

const Leyout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>

        </>

    );
};

export default Leyout;