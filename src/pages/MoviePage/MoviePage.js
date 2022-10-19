import {Movies} from "../../components/Movies";
import {Genres} from "../../components/Genres";
import css from './MoviePage.module.css'
import {UserInfo} from "../../components/UserInfo";


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