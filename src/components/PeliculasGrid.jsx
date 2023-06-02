//recibe info mapeada y renderiza imagen y titulo
//import peliculas from "./peliculas.json"
import {get} from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"; // 11 importamos useLocation
import {PeliculasCard} from "./PeliculasCard"
import { Spinner } from "../components/Spinner.jsx";
import "./PeliculasGrid.css" 

export const PeliculasGrid=()=> {

    /*     13 utilizamos este hook para tomar lo que viene por params del buscador */
const useQuery = ()=>{
    return  new URLSearchParams(useLocation().search)
  }
  //14 es guardar en la variable search lo que se está buscando
const query = useQuery() //creo una variable que trae el metodo 
const search = query.get("search") //traer lo que esta despues de search
  /*  console.log(search); */
//trabajar con estados, ventaja: puedo llamar a cualquier endpoint de esa API
//useEffect para traer y actualizar info

    //12 mostrar uso de useLocation() uso porque  necesitamos el valor de search
/*     const location = useLocation() */
   /*  console.log(location);  */// vemos en el navegador
 /*   console.log(location.search) como se ejecuta search*/
 const [cargando,setCargando]= useState(true);
 const [peliculas,setPeliculas] = useState([])

 useEffect(()=>{
    //15 realizamos un ternario , si hay busqueda, hace un llamado al endpoint de busqueda, sino al de peliculas
    const searchUrl = search 
    ? "/search/movie?query="+search 
    :"/discover/movie"

    setCargando(true)
get(searchUrl).then((data)=>{  // 16 agrego searchUrl
    setPeliculas(data.results);
    setCargando(false)
})
},[search]) // 17 agrego search

if(cargando){
    return <Spinner/>
  }

return(
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)
}