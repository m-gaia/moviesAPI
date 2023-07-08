import {get} from "../utils/httpCliente.js"
import React, { useState, useEffect } from 'react';

export const PeliculasFiltro = ({setPeliculas}) => {

    //lista de generos
    const [generos, setGeneros] = useState([]);
    //genero seleccionado
    const [selectedGenero, setSelectedGenero] = useState('');
    //lista libros filtraods
    // const [peliculas, setPeliculas] = useState([]);
  
      //obtiene la lista de géneros
      useEffect(() => {
        get("/genre/movie/list").then((data) => {
            setGeneros(data.genres);
          });
        }, [] );

      // Llamada al endpoint de libros filtrados por género
      // el género seleccionado cambia, obtiene la lista de libros filtrados por ese género

      useEffect(() => {
        get(`/discover/movie${selectedGenero !== 'all' ? `?with_genres=${selectedGenero}` : ''}`).then((data) => {
            setPeliculas(data.results);
            });
        }, [selectedGenero, setPeliculas]);
  
    // usuario selecciona un género en el formulario y actualiza el estado
    const handleGenreChange = event => {
        setSelectedGenero(event.target.value);
    };
  
    return (
      <div className="flex items-center justify-center mt-6">
        <label htmlFor="genero" className="mr-2"><strong>Filtro Genero:</strong></label>
        <select 
          id="genero" 
          value={selectedGenero} 
          onChange={handleGenreChange}
          className="p-1 rounded border"
        >
          <option value="">Todos</option>
          {generos.map(genero => (
            <option key={genero.id} value={genero.id}>{genero.name}</option>
          ))}
        </select>
      </div>
    );
  };
  
