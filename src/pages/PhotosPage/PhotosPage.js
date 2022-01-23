import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import Photo from "../../component/Photo/Photo";

const PhotosPage = () => {

    const [photos, setPhotos] = useState([]);

    const {state} = useLocation();

    useEffect(() => {
        albumsService.getPhotos(state.id).then(value => setPhotos([...value]));
    }, [state.id]);

    return (
        <div>
            <h1>Photos:</h1>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default PhotosPage;