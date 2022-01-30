import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {getCharactersIds} from "../../helpers";
import {characterService, episodesService} from "../../services";
import Character from "../../component/Character/Character";
import './CharactersStyle.css'

const Characters = () => {

    const {state} = useLocation();
    const {id} = useParams();

    const [episodeName, setEpisodeName] = useState(null);
    const [characters, setCharacters] = useState([]);


    const getCharactersData = async () => {
        if (state) {
            setEpisodeName(state.name)
            const ids = getCharactersIds(state.characters);
            const characters = await characterService.getCharactersByIds(ids);
            setCharacters(characters)
            return
        }

        const {name, characters: links} = await episodesService.getById(id);
        setEpisodeName(name)
        const ids = getCharactersIds(links);
        const characters = await characterService.getCharactersByIds(ids);
        setCharacters(characters)
    }

    useEffect(() => {
        getCharactersData()
    }, []);

    return (
        <div className="characters">
            <h2>{episodeName}</h2>
            <div className="characters-block">
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export default Characters;