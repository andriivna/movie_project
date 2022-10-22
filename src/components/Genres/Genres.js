import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import css from './Genres.module.css'

import {genresAction} from "../../redux/slices";
import {Genre} from "../Genre";



const Genres =()=> {
    const {genres, loading} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(genresAction.getAll())
    },[])

    return(
        <div>
            <div>
                {loading && <h1>Loading.........</h1>}
            </div>

            <div className={css.genres}>
                {
                    genres?.genres?.map(genre =><Genre key={genre.id} genre={genre}/>)
                }
            </div>
        </div>
    )
}

export {
    Genres
}