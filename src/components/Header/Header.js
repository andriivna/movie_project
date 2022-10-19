import {Link} from "react-router-dom";
import css from './Header.css'


const Header=()=>{
    return(
        <div className={css.header}>

           <div>
               <h5><Link>All Genres</Link></h5>

               <form>
              <input type="text" name={"search_film"} placeholder={'Search your interesting...'}/>
            </form>
           </div>
        </div>
    )
}

export {
    Header
}