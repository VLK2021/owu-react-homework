import React from 'react';
import {NavLink} from "react-router-dom";

import './HeaderStyle.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <NavLink to={'/'}>Rick and Morty</NavLink>
            </div>

            <div className="header-bottum">
                <div className= "header-bottum-text">
                    <NavLink to={'/episode'}>The Rick and Morty Episodes</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;