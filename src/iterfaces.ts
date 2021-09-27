export interface Movie{
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    first_air_date:string;
    name:string;
  }

  export interface MoviesState {
    movies: Movie[];
    favoriteMovies: Movie[];
    sorting:string
  }
  
