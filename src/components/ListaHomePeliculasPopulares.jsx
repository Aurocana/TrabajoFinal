import React, { useContext } from "react";
import { MovieContext } from "../context/Movie";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ListaHomePeliculasPopulares() {
  const { movies } = useContext(MovieContext);
  const popularMovies = movies.populares;
  return (
    <div className="box">
      <h1 className="box-title">Peliculas Populares</h1>
      <div className="scrollable-div">
        <ul>
          {popularMovies.map((movie) => {
            let imagen = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
            return (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <li>
                  <img src={imagen} alt={movie.title} className="movie-image" />
                  {movie.title}
                  <button className="go-to-movie-button">
                    <ArrowForwardIosIcon />
                  </button>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListaHomePeliculasPopulares;
