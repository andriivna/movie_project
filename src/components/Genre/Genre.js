import {Link} from "react-router-dom";
import css from './Genre.module.css'
import {useDispatch} from "react-redux";


const Genre=({genre})=>{

    const dispatch = useDispatch();


    return(
        <div>
        <div >
            <Link to ={'/genre/'+`${genre.id}`} onClick={()=>dispatch()}><h5 className={css.line}>{genre?.name}</h5></Link>
        </div>
        </div>
    )
}

export {
    Genre
};