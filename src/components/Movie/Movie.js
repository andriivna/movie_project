
import {Link} from "react-router-dom";
import css from './Movie.module.css'



const Movie=({movie})=>{
    return(
        <div>
            <div>
                <Link to = {movie.id.toString()} state={movie}>
                <div className={css.photo}><img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie img"/></div>

                </Link>
            </div>
        </div>
    )
}

export {
    Movie
}