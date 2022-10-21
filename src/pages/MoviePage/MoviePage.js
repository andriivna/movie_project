import {Movies} from "../../components/Movies";
import {Genres} from "../../components/Genres";
import {Navigate} from "react-router-dom";
import css from './MoviePage.module.css'




const MoviePage=()=>{

    return(
        <div className={css.page}>

        <div>
            <Genres element={<Navigate to={'genres'}/>}/>
        </div>
        <div>
            <Movies/>
        </div>

        </div>
            )
}

export {
    MoviePage
}