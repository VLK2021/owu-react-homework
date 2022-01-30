import React from 'react';

import './EpisodeStyle.css'
import Button from "../Button/Button";


const Episode = ({episode: {id, name, air_date, episode, characters}}) => {
    return (
        <div className="episode">
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Air_date: {air_date}</div>
            <div>Episode: {episode}</div>
            <div className="episode-btn">
                <Button to={`${id}/characters`} state={{name, characters}}>Characters</Button>
            </div>
        </div>
    );
};

export default Episode;