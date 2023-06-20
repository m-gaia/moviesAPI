import { get } from "../utils/httpCliente.js";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import { Spinner } from "../components/Spinner.jsx";
//import "./PeliculaDetalle.css";

export const TVShowDetalle = () => {
    const { tvShowId } = useParams();

  //  const [cargando,setCargando]= useState(true);
    const [tvshow, setTVShows] = useState(null);
  
    useEffect(() => {
      //llamado a la api
      //setCargando(true)
      get(`/tv/${tvShowId}`).then((data) => {
        setTVShows(data);
     // setCargando(false)
      });
    }, [tvShowId]);

    // if(cargando){
    //   return <Spinner/>
    // }
  
    if (!tvshow) {
      return null;
    }
    const imgURL = `https://image.tmdb.org/t/p/w300${tvshow.poster_path}`;
    return (
      // <div className="contenedorDetalle">
      //   <img className="col" src={imgURL} alt={tvshow.name} />
      //   <div className="tvShowDetalle">
      //     <p className="item">
      //       <strong>Titulo: </strong>
      //       {tvshow.name}
      //     </p>
      //     <p>
      //       <strong>Description: </strong>
      //       {tvshow.overview}
      //     </p>
  
      //     <p>
      //       <strong>Generos: </strong>
      //       {tvshow.genres.map((genre) => genre.name).join(", ")}
      //     </p>
      //   </div>
      // </div>
      <section
      className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 place-items-center pt-10 sm:pt-20 gap-4 
      ${
        tvshow? "overflow-hidden" : ""
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
          alt={tvshow.name}
          className="rounded-xl"
        />
      </div>

      {/* seccion resumen  */}
      <div className="lg:col-span-2 space-y-5 max-w-[50rem]">
      <Link
          to="/"
          className="no-underline text-para_text transition duration-200 ease-in hover:text-blue hover:tracking-wider"
        >
          Inicio </Link> / <Link
          to="/tvshow" className="no-underline text-para_text transition duration-200 ease-in hover:text-blue hover:tracking-wider">
        Tv Shows</Link>
        <h1 className="text-6xl font-bold text-center py-2">{tvshow.name}</h1>
        <div className="flex justify-between items-center gap-4">
          <div>
            {tvshow.genres.map((genre) => (
              <span
                key={genre}
                className="border border-blue rounded-lg px-3 py-1 mr-3"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <button
            className="bg-blue text-white px-4 py-1 text-xl font-semibold rounded-2xl hover:bg-blue/80 active:scale-90"
            onClick={() => setTVShows(true)}
          >
            Trailer
          </button>
        </div>
        <div className="px-2">
          <h1 className="font-bold text-xl mb-1">RESUMEN:</h1>
          <p className="text-para_text">
            {tvshow.overview.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </div>
        <div className="text-para_text px-2 pb-10">
          <h1 className="text-white font-bold text-xl mb-1">DETALLES:</h1>
          <p><strong>Estreno:</strong> {tvshow.release_date || "Desconocido"}</p>
          <p><strong>Idioma:</strong>  {tvshow.original_language}</p>
          <p><strong>Puntuación:</strong> {tvshow.vote_average} <strong>Votos:</strong> {tvshow.vote_count}</p>
        </div>
      </div>

    </section>
    );
  };