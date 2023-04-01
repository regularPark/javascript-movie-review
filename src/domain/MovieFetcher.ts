import { MovieDetailResponse, MovieGenres, MovieResponse } from '../types/response.type';

type MovieGetMoviePopular = {
  path: '/movie/popular';
  response: MovieResponse;
};

type MovieSearchMovie = {
  path: '/search/movie';
  response: MovieResponse;
};

type MovieDetail = {
  path: '/movie/';
  response: MovieDetailResponse;
};

// 삭제 예정
type MovieGetGenre = {
  path: '/genre/movie/list';
  response: MovieGenres;
};

const BASE_URL = 'https://api.themoviedb.org/3';

type MovieAPI = MovieGetMoviePopular | MovieGetGenre | MovieSearchMovie | MovieDetail;

export const MovieFetcher = {
  async fetch<Path extends MovieAPI['path']>(
    path: Path,
    url: string,
  ): Promise<Extract<MovieAPI, { path: Path }>['response']> {
    const res = await fetch(`${BASE_URL}${path}${url}`);
    if (!res.ok) throw await res.json();

    const response = await res.json();
    return response;
  },
};
