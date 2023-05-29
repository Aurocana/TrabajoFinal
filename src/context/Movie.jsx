import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState({
    populares: [],
    ultimosLanzamientos: [],
    busqueda: [],
  });

  const [pagina, setPagina] = useState(1);

  // Nueva función para actualizar el estado de 'busqueda'
  const buscarPeliculas = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=175670c6abdd8ecaf1c0dbdcfa8d3f44&query=${query}&language=es-ES`
      )
      .then((data) => {
        setMovies((prevState) => ({
          ...prevState,
          busqueda: data.data.results,
        }));
      });
  };

  useEffect(() => {
    // Consigue las películas populares
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=175670c6abdd8ecaf1c0dbdcfa8d3f44&language=es-ES&page=${pagina}`
      )
      .then((data) => {
        setMovies((prevState) => ({
          ...prevState,
          populares: data.data.results,
        }));
      });

    // ...

    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=175670c6abdd8ecaf1c0dbdcfa8d3f44&language=es-ES&page=${pagina}`
      )
      .then((data) => {
        setMovies((prevState) => ({
          ...prevState,
          ultimosLanzamientos: data.data.results,
        }));
      });
  }, [pagina]);

  return (
    <MovieContext.Provider
      value={{ movies, buscarPeliculas, pagina, setPagina }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
