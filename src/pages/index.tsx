import type { NextPage } from "next";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { changeSorting, getMoviesAsync } from "../features/movies/moviesSlice";
import { useAppDispatch } from "../app/hooks";

const IndexPage: NextPage = () => {
  const movies = useSelector((state: any) => state.movies.movies);
  const sorting = useSelector((state: any) => state.movies.sorting);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, []);

  return (
    <>
      <div className="row">
        <div className="movies__sort">
          <label htmlFor="sort">Sort Movies</label>
          <select
            name="sort"
            id="sort"
            onChange={(e:any) => dispatch(changeSorting(e.target.value))}
            value={sorting}
          >
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
        </div>
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
