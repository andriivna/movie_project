import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import css from './Genres.module.css'
import {genresAction} from "../../services/redux/slices";
import {Link} from "react-router-dom";
import {Navigate} from "react-router-dom";


const Genres =()=> {
    const {genres, loading} = useSelector(state => state.genresReducer);
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
                    genres?.genres?.map(genre =><Link to={genre.id.toString()}>
                        <div key={genre.id}>{genre.name}</div>
                    </Link>
                    )
                }
            </div>
        </div>
    )
}

export {
    Genres
}