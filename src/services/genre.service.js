import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService ={
    getAllGenres:()=>axiosService(urls.genres)
}

export {
    genreService
}