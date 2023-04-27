//trabajar rutas de mi url - Routes define rutas y path la url 
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css';
import { LandingPage } from "./pages/LandingPage";
import {PeliculaDetalle} from "./pages/PeliculaDetalle";

function App() {
  return (
   <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">Peliculas</h1>
        </Link> 
      </header>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
