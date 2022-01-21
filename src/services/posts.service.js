import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postsService = {
    getAllP: () => axiosService.get(urls.posts).then(value => value.data),
    getByIdP: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getComments: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}