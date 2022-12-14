import {axiosService} from "./axios.service";
import {urls} from "../configs";



const movieService ={
    getAll: (page = 1) => axiosService.get(urls.movies, {params:{page}}),
    getGenreID:(genreID,page = 1)=>axiosService.get(urls.movies,{params:{page, with_genres:`${genreID}`}})
}

export {
    movieService
}