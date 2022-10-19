import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices";
import {Genre} from "../../components/Genre/Genre";




 const Genres = () => {
    let {genres:{genres}} = useSelector(state => state.genres);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.getMoviesByGenres())
    },[dispatch])

    return (
        <div>
            {genres && genres.map(genre=> <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};
export {
   Genres
}