import {get} from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"; 
import {TVShowsCard} from "./TVShowsCard"
//import { Spinner } from "../components/Spinner.jsx";
import ReactPaginate from 'react-paginate';
import "./TVShowsGrid.css" 
import "./Paginacion.css"

export const TVShowsGrid =()=> {

const useQuery = ()=>{
    return  new URLSearchParams(useLocation().search)
  }

const query = useQuery() 
const search = query.get("search/tv") 

 //const [cargando,setCargando]= useState(true);
 const [tvshows,setTVShows] = useState([])

   //  estado para contener la página actual 
   const [currentPage, setCurrentPage] = useState(1);
   //cantidad de peliculas que muestra en una página
   const [postsPerPage] = useState(8);

 useEffect(()=>{
   
    const searchUrl = search 
    ? "/search/tv?query="+search 
    :"/discover/tv"

   // setCargando(true)
get(searchUrl).then((data)=>{  
    setTVShows(data.results);
   // setCargando(false)
})
},[search]) 

// if(cargando){
//     return <Spinner/>
//   }

 //variables para almacenar el índice de la primera y última publicación de una página
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 //uso de splice() método para ayudarnos a obtener el contenido que queremos mostrar en cada página
 const currentPosts = tvshows.slice(indexOfFirstPost, indexOfLastPost);
 
 //establecer el currentPage número recibido
 const paginate = ({ selected }) => {
      setCurrentPage(selected + 1);
   };

return(
    <div>
    <ul className="tvShowsGrid z-50">
        {currentPosts.map((tvshow)=>(
        <TVShowsCard key={tvshow.id} tvshow={tvshow}/>
        ))}
    </ul>
       <div className="pagination-container">
            <ul className="pagination">
                <li className="page-number">
                  <ReactPaginate
                    onPageChange={paginate}
                    pageCount={Math.ceil(tvshows.length / postsPerPage)}
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