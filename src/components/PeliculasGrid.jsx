//recibe info mapeada y renderiza imagen y titulo
//import peliculas from "./peliculas.json"
import {get} from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
import {PeliculasCard} from "./PeliculasCard"
import "./PeliculasGrid.css" 

export const PeliculasGrid=()=> {
//trabajar con estados, ventaja: puedo llamar a cualquier endoint de esa API
//useEffect para traer y actualizar info
    const [peliculas,setPeliculas] = useState([])

    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            setPeliculas(data.results);
        })
        },[])

    return (
        <ul className="moviesGrid">
            {peliculas.map((pelicula)=>(
            <PeliculasCard key={pelicula.id} pelicula={pelicula}/> 
            ))}
        </ul>
    );
}