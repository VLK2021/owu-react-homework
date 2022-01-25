import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const CharacterService = {
    getAllCharacter: () => axiosService.get(urls.character).then(value => value.data)
}