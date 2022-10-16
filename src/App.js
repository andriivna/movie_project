import {Route, Routes} from 'react-router-dom'
import {MainLayout} from "./layouts/MainLayout";
import {MoviePage} from "./pages";

function App(){
  return(
      <div>
<Routes>
        <Route path={'/'} element ={<MainLayout/>}>
          <Route index element ={<MoviePage/>}/>

        </Route>
</Routes>

      </div>

  )
}

export default App;
