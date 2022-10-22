import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import css from './Genres.module.css'
import {genresAction} from "../../redux/slices";
import {Link} from "react-router-dom";
import {Genre} from "../Genre";



const Genres =()=> {
    const {genres, loading} = useSelector(state => state.genres);
    const getGenres = genres.genres
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(genresAction.getAll())
    },[dispatch])

    return(
        <div>
            <div>
                {loading && <h1>Loading.........</h1>}
            </div>

            <div className={css.genres}>
                {
                    getGenres && getGenres.map(genre => <Genre key={genre.id} genre={genre} />)
                }
            </div>
        </div>
    )
}

export {
    Genres
}