import {Link} from "react-router-dom";

const Genre=({genre})=>{
    return(
        <div>
            <Link><h5>Genre:{genre?.name}</h5></Link>
        </div>
    )
}

export {
    Genre
};