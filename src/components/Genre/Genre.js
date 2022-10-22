import {Link} from "react-router-dom";
import css from './Genre.module.css'


const Genre=({genre})=>{



    return(
        <div>
        <div >
            <Link to ={'/genre/'+`${genre.id}`}><h5 className={css.line}>{genre?.name}</h5></Link>
        </div>
        </div>
    )
}

export {
    Genre
};