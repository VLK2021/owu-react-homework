import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {episodesService} from "../../services";
import Episode from "../../component/Episode/Episode";
import './EpisodesStyle.css'
import Paginator from "../../component/Paginator/Paginator";


const Episodes = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});


    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }

        const page = searchParams.get('page');

        episodesService.getAll(page).then(value => {
            setEpisodes([...value.results])
            setInfo({...value.info})

        })

    }, [searchParams]);

    return (
        <div>
            <div className="items">
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>

            <div className="paginator">
                <Paginator info={info}/>
            </div>


        </div>
    );
};

export default Episodes;