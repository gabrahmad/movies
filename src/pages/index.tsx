import axios from "../components/Axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import Counter from "../features/counter/Counter";
import requests from "../components/requests";
import MovieCard from "../components/MovieCard";

const IndexPage: NextPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending);

      setMovies(request.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>{}</h2>
      <div className="row">
        <div className="movie_cards">
          {movies.map((movie, i) => (
            <MovieCard movie={movie}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
