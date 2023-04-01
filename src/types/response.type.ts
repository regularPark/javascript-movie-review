import { Genre, Movie } from './movies.type';

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
};

export type MovieErrorResponse = {
  success: boolean;
  status_code: number;
  status_message: string;
};

export type MovieGenres = {
  genres: Genre[];
};
