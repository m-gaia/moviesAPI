//recibe info mapeada y renderiza imagen y titulo
//import peliculas from "./peliculas.json"
import {get} from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
import {PeliculasCard} from "./PeliculasCard"
import { Spinner } from "../components/Spinner.jsx";
import "./PeliculasGrid.css" 

export const PeliculasGrid=()=> {
//trabajar con estados, ventaja: puedo llamar a cualquier endoint de esa API
//useEffect para traer y actualizar info
    const [cargando,setCargando] = useState(true);
    const [peliculas,setPeliculas] = useState([])

    useEffect(()=>{
        setCargando(true)
    get("/discover/movie").then((data)=>{
        setPeliculas(data.results);
        setCargando(false)
    })
    },[])

    if(cargando){
        return <Spinner/>
      }

    return (
        <ul className="moviesGrid">
            {peliculas.map((pelicula)=>(
            <PeliculasCard key={pelicula.id} pelicula={pelicula}/> 
            ))}
        </ul>
    );
}