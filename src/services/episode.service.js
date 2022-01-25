import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const episodeService = {
    getAllEpisode: () => axiosService.get(urls.episode).then(value => value.data)
}