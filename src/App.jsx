//trabajar rutas de mi url - Routes define rutas y path la url 
import {BrowserRouter,Routes,Route} from "react-router-dom"
//import './App.css';
import {PeliculaDetalle} from "./pages/PeliculaDetalle";
import {PeliculasMain} from "./pages/PeliculasMain";
import {TVShowDetalle} from "./pages/TVShowDetalle";
import {TVShowsMain} from "./pages/TVShowsMain";
import {LandingPage} from "./pages/LandingPage";


function App() {
  return (
   <BrowserRouter>
      <div className=" w-full h-screen">
          {/* <h1 className="text-1xl font-bold text-center "><LandingPage/></h1>
          {/* <Link to="/">
            <h1 className="text-1xl font-bold text-center "><LandingPage/></h1>
          </Link>  */}
        
        {/* definicion de rutas a componentes */}
        <LandingPage/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/pelicula" element={<PeliculasMain/> }/>
          <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/>
          <Route path="/tvshow" element={<TVShowsMain/> }/>
          <Route path="/tvshow/:tvShowId" element={<TVShowDetalle/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
