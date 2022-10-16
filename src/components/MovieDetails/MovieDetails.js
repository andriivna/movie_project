import {useLocation} from "react-router-dom";

const MovieDetails=()=>{
    let {state} = useLocation()
    return(
        <div>
            <div>
                <div><img src={`https://image.tmdb.org/t/p/w200${state.poster_path}`} alt="movie img"/>/>/></div>
            </div>
            <div>
                <div>Date:{state.release_date}</div>
                <div>Genre:{}</div>
                <div>Original language:{state.original_language}</div>
                <div>Overview:{state.overview}</div>
            </div>
        </div>
    )
}
