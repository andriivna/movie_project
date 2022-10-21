import {axiosService} from "./axios.service";
import {urls} from "../configs";



const movieService ={
    getAll: (page = 1, with_genres = '') => axiosService.get(urls.movies, {params:{page, with_genres}})
}

export {
    movieService
}