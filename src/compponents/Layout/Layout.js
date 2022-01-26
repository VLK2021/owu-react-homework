import React from 'react';
import Header from "../Header/Header";
import {Link, Outlet} from "react-router-dom";

import './LayoutStyle.css'

const Layout = () => {


    return (
        <div className="layout">
            <Header/>

            <div className="layout-outlet">
                <Outlet/>
            </div>


            <div className="episodes-buttons">
                <button>Preveous</button>

                <Link to={+1} className="episodes-buttons">
                    <button>Next</button>
                </Link>
            </div>



        </div>
    );
};

export default Layout;