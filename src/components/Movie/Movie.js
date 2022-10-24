import { NavLink} from "react-router-dom";
import {Rating} from "react-simple-star-rating";

import css from './Movie.module.css'
import {genresAction} from "../../redux/slices";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";


const Movie=({value:movie})=>{

    const [genres, setGenres] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(genresAction.getAll()).then(({payload}) => setGenres(payload.genres))
    }, [dispatch])

    const badge = genres.filter(genre => movie.genre_ids.includes(genre.id)).map(item => item.name)
    badge.length = 2

    return(
        <div >
            <div className={css.full}>
                <NavLink to={'/movies/details'} state={{...movie}}>
                <div><img className={css.photo} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie img"/>

                    <div className={css.badge}>
                        {badge.map((item,index) => (
                            <p key={index} className={css.badge_item}>{item}</p>
                        ))}
                    </div>
                </div>

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