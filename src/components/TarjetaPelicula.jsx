import React from "react";
import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta";
import { Grid } from "@mui/material";

function TarjetaPelicula({ elem }) {
  const movieDetailUrl = `/movies/${elem.id}`;

  const descripcionLimitada =
    elem.overview.length > 150
      ? `${elem.overview.substring(0, 150)}...`
      : elem.overview;

  return (
    <Grid
      key={elem.id}
      item
      xs={12}
      sm={10}
      md={6}
      lg={4}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Link to={movieDetailUrl} style={{ textDecoration: "none" }}>
        <Tarjeta
          name={elem.original_title}
          image={elem.poster_path}
          descripcion={descripcionLimitada}
        />
      </Link>
    </Grid>
  );
}

export default TarjetaPelicula;
