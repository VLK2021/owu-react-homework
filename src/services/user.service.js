import {axiosService} from "./axios.service";
import {urls} from "../config";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getAllP: () => axiosService.get(urls.posts).then(value => value.data),
    getAllC: () => axiosService.get(urls.comments).then(value => value.data)
}