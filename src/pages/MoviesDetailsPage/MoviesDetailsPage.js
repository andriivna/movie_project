import {useLocation} from "react-router-dom";

import {MovieDetails} from "../../components/MovieDetails/MovieDetails";


const MoviesDetailsPage=()=>{
    const {state} = useLocation();
    return(
        <div>
            <MovieDetails state={state}/>
        </div>
    )
}

export {
    MoviesDetailsPage
}