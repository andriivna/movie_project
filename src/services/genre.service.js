import {axiosService} from "./axios.service";
import {urls} from "../configs";

const apiKey = 'api_key=becf59af707283b915e1027ddd5995ae';

const genreService ={
    getAll: () => axiosService.get(`${urls.genres}${urls.movie}/list?${apiKey}`)
}

export {
    genreService
}