import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices";

import {useSearchParams} from "react-router-dom";
import css from "./Movies.module.css"
import {Movie} from "../Movie";
import {Header} from "../Header";


const Movies=()=>{
    const {movies, loading} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    let [query, setQuery] = useSearchParams({page: '1'});
    console.log(query);

    const page = query.get('page');

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    },[page,dispatch]);

    const prevPage = () => {
        const prev = +page - 1;
        if (prev >= 1) {
            setQuery({page: `${prev}`})
        }
    }

    const nextPage = () => {
        const next = +page + 1;
        if (next <= 500) {
            setQuery({page: `${next}`})
        }

    };

    return (
        <div >
            {loading && <h1>Loading.........</h1>}


            <div className={css.background}>

                   <div className={css.input}> <Header/>
                   </div>

                <div className={css.list}>

                {

                movies.results?.map(movie => <Movie key={movie.id} movie={movie}/>)
            }

                <div className={css.align}>
                    <button onClick={prevPage}>❮Prev</button>
                    <button onClick={nextPage}>Next❯</button>
                </div>

            </div>
            </div>

        </div>
    );
}

export {
    Movies
}