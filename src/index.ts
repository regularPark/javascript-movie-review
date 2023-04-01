import './assets/common.css';
import Header from './components/Header';
import Modal from './components/Modal';
import { MovieList } from './components/MovieList';
import { TopButton } from './components/TopButton';
import { POPULAR_MOVIES, SEARCH_RESULT } from './constants';
import MovieAPI from './domain/MovieAPI';

const init = () => {
  const popularFetchFn = (page: number) => MovieAPI.getPopularMovies(page);
  const modal = new Modal();
  const header = new Header();

  modal.init();
  header.init();
  TopButton.render();

  function assignMovieList(movieList: MovieList) {
    document.querySelector('main')?.replaceChildren(movieList.render());
  }

  assignMovieList(new MovieList(popularFetchFn, POPULAR_MOVIES));

  // 분리해야 함. header가 할 일임.
  document.querySelector('.search-box')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries());
    const query = formData['search-text'] as string;

    if (!query) return;
    const searchFetchFn = (page: number) => MovieAPI.getSearchMovies(query, page);
    assignMovieList(new MovieList(searchFetchFn, SEARCH_RESULT(query)));
  });

  document.querySelector('.logo')?.addEventListener('click', () => {
    assignMovieList(new MovieList(popularFetchFn, POPULAR_MOVIES));
  });
};

init();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelector('.scroll-to-top')?.addEventListener('click', scrollToTop);

window.onload = () => {
  setTimeout(() => {
    scrollToTop();
  }, 100);
};
