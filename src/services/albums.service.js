import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumsService = {
    getByUserIdAlboms: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getPhotos: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}