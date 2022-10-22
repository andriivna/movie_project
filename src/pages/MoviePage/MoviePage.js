import {Movies} from "../../components/Movies";
import css from './MoviePage.module.css'

import {Genres} from "../../components/Genres";




const MoviePage=()=>{

    return(
        <div className={css.page}>

        <div>
            <Genres/>
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