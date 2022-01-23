import React from 'react';

import './PhotoStyle.css'

const Photo = ({photo}) => {

    const {title, thumbnailUrl} = photo;

    return (
        <div className={"photo"}>
            <div>Title: {title}</div>
            <div>
                <img src={thumbnailUrl} alt={"photo"}/>
            </div>
        </div>
    );
};

export default Photo;