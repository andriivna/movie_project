
import {urls} from "../configs";
import {axiosService} from "./axios.service";

const genreService ={
    getAll: () => axiosService.get(urls.genres)
}

export {
    genreService
}