import {axiosService} from "./axios.service";
import {urls} from "../config";

export  const characterService = {
    getCharactersByIds:(ids)=> axiosService.get(`${urls.character}/${ids}`).then(value => value.data)
}