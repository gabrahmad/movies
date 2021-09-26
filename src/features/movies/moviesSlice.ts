import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import axios from "../../components/Axios";
import requests from "../../components/requests";

export interface MoviesState {
  movies: [];
  favoriteMovies: [];
}



export const getMoviesAsync = createAsyncThunk(
  "movies/getMoviesAsync",
  async () => {
    const response = await axios.get(requests.fetchTrending);
    console.log(response);
    return response.data.results;
  }
);

const options = {
  name: "movies",
  initialState: {
    movies: [],
    favoriteMovies: [],
    sorting: "DESC",
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (m) => m.id !== action.payload.id
      );
    },
    changeSorting: (state, action) => {
      state.sorting = action.payload;
      if (state.sorting === "DESC") {
        state.movies = _.orderBy(state.movies, ["id"], ["desc"]);
      }else{
        state.movies = _.orderBy(state.movies, ["id"], ["asc"]);
      }
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesAsync.fulfilled, (state, action) => {
      state.movies = action.payload
    });
  },
};

export const moviesSlice = createSlice(options);
export const { addFavorite, removeFavorite, changeSorting } =
  moviesSlice.actions;
