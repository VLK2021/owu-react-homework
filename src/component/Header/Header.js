import React from 'react';
import {Link} from "react-router-dom";

import './HeaderStyle.css'

const Header = () => {
    return (

        <div className="header">
            <h1>Homework-5</h1>
            <div className="start">
                <Link to={'/'}>Back to start</Link>
            </div>
        </div>
    );
};

export default Header;