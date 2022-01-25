import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const locationService = {
    getAllLocation: () => axiosService.get(urls.location).then(value => value.data)
}