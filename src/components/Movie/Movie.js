
import {Link} from "react-router-dom";
import css from './Movie.module.css'

const Movie=({movie})=>{
    return(
        <div>
            <div>
                <div ><Link className={css.photo} ><img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie img"/></Link></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export {
    Movie
}