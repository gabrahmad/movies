import { Movie, MoviesState } from "./../../iterfaces";
import { AppState } from "./../../app/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import axios from "../../components/Axios";
import requests from "../../components/requests";

export const getMoviesAsync = createAsyncThunk(
  "movies/getMoviesAsync",
  async (url:string) => {
    const response = await axios.get(url);
    return response.data.results;
  }
);
const initialState: MoviesState = {
  movies: [],
  favoriteMovies: [],
  sorting: "DESC",
};
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Movie>) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (m) => m.id !== action.payload.id
      );
    },
    changeSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
      if (state.sorting === "DESC") {
        state.movies = _.orderBy(state.movies, ["vote_average"], ["desc"]);
      } else {
        state.movies = _.orderBy(state.movies, ["vote_average"], ["asc"]);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getMoviesAsync.fulfilled,
      (state: MoviesState, action: PayloadAction<Movie[]>) => {
        state.movies = action.payload;
      }
    );
  },
});

// export const moviesSlice = createSlice(options);
export const { addFavorite, removeFavorite, changeSorting } =
  moviesSlice.actions;

