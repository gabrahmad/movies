import React from "react";
import { FaStar } from "react-icons/fa";
function MovieCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  console.log(movie);

  return (
    <div className="movie__card">
      <div>
        <img
          key={movie.id}
          src={`${base_url}${movie.poster_path}`}
          alt=""
          className="movie__poster"
        />
      </div>

      <div className="movie__details">
        <div>
          <h3 className="movie__title">
            <span>{movie.title ? movie.title : movie.name}</span>
            <span>
              <FaStar />
            </span>
          </h3>
          <p className="movie__overview">{movie.overview}</p>
        </div>

        <div className="movie_stats">
          <p>
            {movie.release_date ? movie.release_date : movie.first_air_date}
          </p>
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
