import { NavLink} from "react-router-dom";
import {Rating} from "react-simple-star-rating";

import css from './Movie.module.css'


const Movie=({value:movie})=>{

    return(
        <div >
            <div className={css.full}>
                <NavLink to={'/movies/details'} state={{...movie}}>

                <div className={css.photo}><img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie img"/></div>
                </NavLink>
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