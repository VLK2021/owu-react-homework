import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

import './LayoutStyle.css'

const Layout = () => {


    return (
        <div className="layout">
            <Header/>

            <div className="layout-outlet">

                <Outlet/>


            </div>
        </div>
    );
};

export default Layout;