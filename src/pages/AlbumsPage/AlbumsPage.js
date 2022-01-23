import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import Album from "../../component/Album/Album";


const AlbumsPage = () => {

    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getByUserIdAlboms(id).then(value => setAlbums([...value]));
    }, [id]);

    return (

        <div>
            <h1>Albums:</h1>
            <div>
                {albums.map(value => <Album key={value.id} album={value}/>)}
            </div>

            <div><Outlet/></div>
        </div>
    );
};

export default AlbumsPage;