
import {Link} from "react-router-dom";
import css from './Movie.module.css'
import {Rating} from "react-simple-star-rating";




const Movie=({movie})=>{

    return(
        <div >
            <div className={css.full}>
                <Link to = {movie.id.toString()} state={movie}>
                <div className={css.photo}><img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie img"/></div>
                </Link>
                   <div className={css.text}> <p><b>{movie.original_title}</b></p>
                    <p>{movie.release_date}</p> </div>
                    <div>

                    <Rating
                        readonly={true}
                        initialValue={Math.round(movie.vote_average/2)}
                        iconsCount={5}
                        size={20}
                    />
                    </div>
                </div>
        </div>
    )
}

export {
    Movie
}