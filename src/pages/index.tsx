import type { NextPage } from "next";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { changeSorting, getMoviesAsync } from "../features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { MoviesState } from "../iterfaces";

const IndexPage: NextPage = () => {
  const movies = useAppSelector(state => state.movies.movies);
  const sorting = useAppSelector(state => state.movies.sorting);
  const dispatch = useAppDispatch();

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  console.log(API_KEY,'key')
  const URL:string = `/movie/top_rated?api_key=${API_KEY}&language=en-US`

  useEffect(() => {
    dispatch(getMoviesAsync(URL));
  }, []);

  return (
    <>
      <div className="row">
        <div className="movies__sort">
          <label htmlFor="sort">Sort Movies</label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => dispatch(changeSorting(e.target.value))}
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

