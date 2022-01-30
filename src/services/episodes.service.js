import {axiosService} from "./axios.service";

import {urls} from "../config";

export const episodesService = {
    getAll: (page) => axiosService.get(urls.episode, {params: {page}}).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.episode}/${id}`).then(value => value.data)
}