//recibe info mapeada y renderiza imagen y titulo
//import peliculas from "./peliculas.json"
import {get} from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"; // 11 importamos useLocation
import {PeliculasCard} from "./PeliculasCard"
//import { Spinner } from "../components/Spinner.jsx";
import ReactPaginate from 'react-paginate';
import "./PeliculasGrid.css" 
import "./Paginacion.css" 
import { PeliculasFiltro } from './PeliculasFiltro';


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


// const [cargando,setCargando]= useState(true);
 const [peliculas,setPeliculas] = useState([])
 const [filtroGenero, setFiltroGenero] = useState('');
  //  estado para contener la página actual 
 const [currentPage, setCurrentPage] = useState(1);
 //cantidad de peliculas que muestra en una página
 const [postsPerPage] = useState(8);


 useEffect(()=>{
    //15 realizamos un ternario , si hay busqueda, hace un llamado al endpoint de busqueda, sino al de peliculas
    const searchUrl = search 
    ? "/search?query="+search 
    :"/discover/movie"

    //setCargando(true)
get(searchUrl).then((data)=>{  // 16 agrego searchUrl
    setPeliculas(data.results);
    //setCargando(false)
})
},[search]) // 17 agrego search

// if(cargando){
//     return <Spinner/>
//   }

const filtrarPorGenero = (genero) => {
  if (genero === 'todos') {
    setFiltroGenero('');
  } else {
    setFiltroGenero(genero);
  }
};

const peliculasFiltradas = filtroGenero
  ? peliculas.filter((pelicula) => pelicula.genero === filtroGenero)
  : peliculas;

 //variables para almacenar el índice de la primera y última publicación de una página
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 //uso de splice() método para ayudarnos a obtener el contenido que queremos mostrar en cada página
 const currentPosts = peliculasFiltradas.slice(indexOfFirstPost, indexOfLastPost);
 
 //establecer el currentPage número recibido
 const paginate = ({ selected }) => {
      setCurrentPage(selected + 1);
   };

return(
    <div>
      <div className="moviesFilterContainer">
        <PeliculasFiltro peliculas={peliculas} setPeliculas={setPeliculas} filtrarPorGenero={filtrarPorGenero} />
      </div>
      <ul className="moviesGrid z-50">
          {currentPosts.map((pelicula)=>(
          <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
          ))}
      </ul>
          <div className="pagination-container">
            <ul className="pagination">
              <li className="page-number">
                <ReactPaginate 
                  onPageChange={paginate}
                  pageCount={Math.ceil(peliculas.length / postsPerPage)}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-number'}
                  previousLinkClassName={'page-number'}
                  nextLinkClassName={'page-number'}
                  activeLinkClassName={'active'}
               />
               </li>
            </ul>
          </div>
    </div>
)
}