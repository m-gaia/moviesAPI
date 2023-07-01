import { get } from "../utils/httpCliente.js";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import { Spinner } from "../components/Spinner.jsx";
//import "./PeliculaDetalle.css";
import { HiArrowCircleLeft } from "react-icons/hi";

export const PeliculaDetalle = () => {
    const { peliculaId } = useParams();

   // const [cargando,setCargando]= useState(true);
    const [pelicula, setPelicula] = useState(null);
  
    useEffect(() => {
      //llamado a la api
      //setCargando(true)
      get(`/movie/${peliculaId}`).then((data) => {
        setPelicula(data);
        //console.log(data)
      //setCargando(false)
      });
    }, [peliculaId]);
    
    // if(cargando){
    //   return <Spinner/>
    // }
  
    if (!pelicula) {
      return null;
    }
    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
    return (
      <section
      className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 place-items-center pt-10 sm:pt-20 gap-4 
      ${
        pelicula? "overflow-hidden" : ""
      }`}
    >
      {/* seccion imagen  */}
      <div className="h-[25rem] md:h-[35rem]">
      <img
          src={
            imgURL
              ? imgURL
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={pelicula.title}
          className="rounded-xl"
        />
      </div>

      {/* seccion resumen  */}
      <div className="lg:col-span-2 space-y-5 max-w-[50rem]">
        <Link
          to="/pelicula" className="no-underline text-para_text transition duration-200 ease-in hover:text-blue hover:tracking-wider">
        <HiArrowCircleLeft className="text-3xl"></HiArrowCircleLeft></Link>
        <h1 className="text-6xl md:text-3xl font-bold text-center py-2">{pelicula.title}</h1>
        <div className="flex justify-between items-center gap-4">
          <div>
            {pelicula.genres.map((genre, index) => (
              <span
                key={index}
                className="border border-black rounded-lg px-3 py-1 mr-3"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <button
            className="bg-blue px-4 py-1 text-white text-xl font-semibold rounded-2xl hover:bg-blue/80 active:scale-90"
            onClick={() => setPelicula(true)}
          >
            Ver Trailer
          </button>
        </div>
        <div className="px-2">
          <h1 className="font-bold text-xl mb-1">RESUMEN:</h1>
          <p className="text-para_text">
            {pelicula.overview.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </div>
        <div className="text-para_text px-2 pb-10">
          <h1 className="text-white font-bold text-xl mb-1">DETALLES:</h1>
          <p><strong>Estreno:</strong> {pelicula.release_date || "Desconocido"}</p>
          <p><strong>Idioma:</strong> {pelicula.original_language}</p>
          <p><strong>Puntuación:</strong> {pelicula.vote_average} <strong>Votos:</strong> {pelicula.vote_count}</p>
		      <p className="font-bold">{pelicula.adult === true || "Apto para todo público"} </p>
        </div>
      </div>

    </section>
    );
  };