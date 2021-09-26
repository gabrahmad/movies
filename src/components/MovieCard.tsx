import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { addFavorite  , removeFavorite} from "../features/movies/moviesSlice";
function MovieCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const dispatch = useAppDispatch();
  const favoriteMovies = useSelector(
    (state: any) => state.movies.favoriteMovies
  );

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    if (favoriteMovies.length > 0) {
      favoriteMovies.map((m: any) => {
        
        if (m.id == movie.id) {
          dispatch(removeFavorite(movie));
          setIsFavorite(false);
        } else {
          dispatch(addFavorite(movie));
          setIsFavorite(true);
        }
      });
    } else {
      dispatch(addFavorite(movie));
      setIsFavorite(true);
    }
  };

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
              <FaStar
                onClick={handleFavorite}
                className={`${isFavorite ? "movie__favorite" : "movie__star"} `}
              />
            </span>
          </h3>
          <p className="movie__overview">{movie.overview}</p>
        </div>

        <div className="movie_stats">
          <p>
            Release Date : {movie.release_date ? movie.release_date : movie.first_air_date}
          </p>
          <p>Rating : {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
