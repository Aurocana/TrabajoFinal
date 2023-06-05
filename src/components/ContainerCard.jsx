import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import TarjetaPelicula from "./TarjetaPelicula";
import { Grid, Pagination } from "@mui/material";
import { useState } from "react";

function ContainerCard({ tipo }) {
  const { movies, pagina, setPagina } = useContext(MovieContext);

  const getMovies = () => {
    switch (tipo) {
      case "popular":
        return movies.populares;
      case "ultimos":
        return movies.ultimosLanzamientos;
      case "busqueda":
        return movies.busqueda;
      default:
        return movies;
    }
  };

  const peliculas = getMovies();

  return (
    <>
      <Grid
        container
        paddingTop={"5rem"}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {peliculas
          ? peliculas.map((elem) => (
              <TarjetaPelicula elem={elem} key={elem.id} />
            ))
          : " error"}
      </Grid>
      <Grid container justifyContent="center" alignItems="center" margin={3}>
        <Pagination
          count={10}
          page={pagina}
          onChange={(event, value) => setPagina(value)}
        />
      </Grid>
    </>
  );
}
export default ContainerCard;
