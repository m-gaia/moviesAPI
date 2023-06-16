//trabajar rutas de mi url - Routes define rutas y path la url 
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css';
import {PeliculaDetalle} from "./pages/PeliculaDetalle";
import {PeliculasMain} from "./pages/PeliculasMain";
import {TVShowDetalle} from "./pages/TVShowDetalle";
import {TVShowsMain} from "./pages/TVShowsMain";

function App() {
  return (
   <BrowserRouter>
        <header>
          <Link to="/">
            <h1 className="text-1xl font-bold text-center "> LandingPage</h1>
          </Link> 
        </header>
        <Routes>
          <Route path="/pelicula" element={<PeliculasMain/> }/>
          <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/>
          <Route path="/tvshow" element={<TVShowsMain/> }/>
          <Route path="/tvshow/:tvShowId" element={<TVShowDetalle/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
