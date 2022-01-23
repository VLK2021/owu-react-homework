import React from 'react';
import {Link} from "react-router-dom";

import "./AlbumStyle.css"


const Album = ({album}) => {

    const {userId, id, title} = album;

    return (

        <div className={"album"}>
            <div>
                <div>UserId: {userId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
            </div>

            <Link to={`${id.toString()}/photos`} state={{id}}>
                <button className={"photosBtn"}>Photos</button>
            </Link>

        </div>

    );
};

export default Album;