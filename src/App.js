import './App.css'
import {Route, Routes,Navigate} from 'react-router-dom'

import {MainLayout} from "./layouts/MainLayout";
import {MoviePage} from "./pages/MoviePage";
import {MoviesDetailsPage} from "./pages/MoviesDetailsPage";


function App(){
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviePage/>}/>
                    <Route path={'movies/details'} element={<MoviesDetailsPage/>}/>
                    <Route path={'/genre/:id'} element={<MoviePage/>}/>
                    <Route path={'/genre/:id/:id'} element={<MoviePage/>}/>
                </Route>

            </Routes>

        </div>

    );
}

export default App;
