import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetail.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=175670c6abdd8ecaf1c0dbdcfa8d3f44&language=es-ES`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=175670c6abdd8ecaf1c0dbdcfa8d3f44`
      )
      .then((response) => {
        const youtubeVideo = response.data.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );
        if (youtubeVideo) {
          setTrailerId(youtubeVideo.key);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const backdropImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div
      className="movie-detail-container"
      style={{ backgroundImage: `url(${backdropImageUrl})` }}
    >
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={trailerId}
        onClose={() => setIsOpen(false)}
      />

      <div className="movie-detail-content">
        <div className="movie-detail-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Poster"
          />
        </div>
        <div className="movie-detail-info">
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p>Generos:</p>
              <ul>
                {movie.genres.length > 0 &&
                  movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
            </div>
            {trailerId && (
              <button className="btn btn-light" onClick={() => setIsOpen(true)}>
                Ver tráiler
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
