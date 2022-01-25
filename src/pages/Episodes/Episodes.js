import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import Episod from "../../compponents/Episod/Episod";
import './EpisodesStyle.css'

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {
        episodeService.getAllEpisode().then(value => setEpisodes([...value.results]))
    }, []);
    console.log(episodes);

    return (
        <div className="wrapEpisodes">
            <div className="episodes">
                {
                    episodes.map(episod => <Episod key={episod.id} episod={episod}/>)
                }
            </div>

            <div className="episodes-buttons">
                <button>Preveous</button>
                <button onSubmit={onsubmit}>Next</button>
            </div>


        </div>

    );
};

export default Episodes;