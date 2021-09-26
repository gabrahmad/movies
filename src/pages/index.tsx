import type { NextPage } from "next";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAsync } from "../features/movies/moviesSlice";
import { useAppDispatch } from "../app/hooks";

const IndexPage: NextPage = () => {
  const movies = useSelector((state:any) => state.movies.movies);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, []);

  return (
    <>
      <h2>{}</h2>
      <div className="row">
        <div className="movie_cards">
          {movies.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
