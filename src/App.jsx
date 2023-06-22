//trabajar rutas de mi url - Routes define rutas y path la url 
import {BrowserRouter,Routes,Route} from "react-router-dom"
//import './App.css';
import {PeliculaDetalle} from "./pages/PeliculaDetalle";
import {PeliculasMain} from "./pages/PeliculasMain";
import {TVShowDetalle} from "./pages/TVShowDetalle";
import {TVShowsMain} from "./pages/TVShowsMain";
import {LandingPage} from "./pages/LandingPage";
import {Header} from './components/Header';


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/pelicula" element={<PeliculasMain/> }/>
          <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/>
          <Route path="/tvshow" element={<TVShowsMain/> }/>
          <Route path="/tvshow/:tvShowId" element={<TVShowDetalle/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
