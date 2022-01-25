import React from 'react';

import './EpisodStyle.css';

const Episod = ({episod}) => {

    const {name, episode, air_date} = episod;

    return (
        <div className="episod">

            <h3>{name}</h3>

            <div className="episod-block">
                <div><span><strong>Episode:</strong></span> <i>{episode}</i></div>
                <div><strong>Air date:</strong> {air_date}</div>
            </div>

        </div>
    );
};

export default Episod;