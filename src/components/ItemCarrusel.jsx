import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { Link } from "react-router-dom";

function ItemCarrusel({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="carousel__item" key={movie.id}>
      {movie.poster_path ? (
        <div className="carousel__image-container maxheight">
          <div className="carousel__image-overlay maxheight">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="carousel__image"
            />
          </div>
          <div className="carousel__overlay">
            <h3 className="carousel__title">{movie.title}</h3>
            <p className="carousel__description">{movie.overview}</p>
            <button className="carousel__button">Ver más</button>
          </div>
        </div>
      ) : (
        <p>No image available</p>
      )}
    </Link>
  );
}

export default ItemCarrusel;
