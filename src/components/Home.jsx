import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { MovieContext } from "../context/Movie";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemCarrusel from "./ItemCarrusel";
import ListaHomePeliculasPopulares from "./ListaHomePeliculasPopulares";
import ListaHomeUltimosLanzamientos from "./ListaHomeUltimosLanzamientos";
import { Box } from "@mui/material";

function Home() {
  const { movies } = useContext(MovieContext);
  const popularMovies = movies.populares;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Carousel autoPlay showThumbs={false} infiniteLoop useKeyboardArrows>
        {popularMovies.map((movie) => (
          <ItemCarrusel movie={movie} key={movie.id} />
        ))}
      </Carousel>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingBottom: "10rem",
        }}
      >
        <ListaHomePeliculasPopulares />
        <ListaHomeUltimosLanzamientos />
      </Box>
    </Box>
  );
}

export default Home;
