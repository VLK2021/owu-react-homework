import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import Episod from "../../compponents/Episod/Episod";
import './EpisodesStyle.css'
import {Link, Outlet, useParams} from "react-router-dom";


const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        episodeService.getAllEpisode().then(value => setEpisodes({...value}));
    }, []);

    console.log(episodes);

    return (
        <div className="wrapEpisodes">
            <div className="episodes">
                {
                    episodes.results &&  episodes.results.map(episod => <Episod key={episod.id} episod={episod}/>)
                }
            </div>

            <Outlet/>


        </div>

    );
};

export default Episodes;