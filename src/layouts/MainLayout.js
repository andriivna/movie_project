import {Outlet} from 'react-router-dom'
import {Genres} from "../pages/MoviesDetailsPage/Genres";



const MainLayout=()=>{
    return(
        <div>
            <Genres/>
            <Outlet/>
        </div>
    )
}

export {
    MainLayout
}