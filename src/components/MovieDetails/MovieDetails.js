import css from './MovieDetails.module.css'
import {Rating} from "react-simple-star-rating";

const MovieDetails=({state})=>{

    return(
        <div className={css.poster}>
            <div className={css.element}>
            <div>
                <div><img src={`https://image.tmdb.org/t/p/w200${state.poster_path}`} alt="movie img"/></div>
            </div>
            <div className={css.text}>
                <div className={css.header}>
                <div><h3>{state.original_title}</h3></div>
                <div><h3>{state.vote_average}/10</h3></div>
                </div>

                <div className={css.subtext}>
                    <div><p>{state.original_language}</p></div>
                    <div><p>{state?.title}</p></div>
                    <div><p>{state.release_date}</p></div>
                    <div><p>Genre:{state.genre_ids}</p></div>
                </div>

                <p>{state.overview}</p>
                <Rating name="half-rating-read"  />
            </div>
            </div>
        </div>
    )
}

export {
    MovieDetails
}
