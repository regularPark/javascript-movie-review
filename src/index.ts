import './assets/common.css';
import Header from './components/Header';
import Modal from './components/Modal';
import { MovieList } from './components/MovieList';
import { TopButton } from './components/TopButton';
import { POPULAR_MOVIES, SEARCH_RESULT } from './constants';
import MovieAPI from './domain/MovieAPI';

const init = () => {
  const modal = new Modal();
  const header = new Header();

  header.render();
  TopButton.render();
};

init();

const popularFetchFn = (page: number) => MovieAPI.getPopularMovies(page);

function assignMovieList(movieList: MovieList) {
  document.querySelector('main')?.replaceChildren(movieList.render());
}

assignMovieList(new MovieList(popularFetchFn, POPULAR_MOVIES));

document.querySelector('.logo')?.addEventListener('click', () => {
  assignMovieList(new MovieList(popularFetchFn, POPULAR_MOVIES));
});

document.querySelector('.search-box')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries());
  const query = formData['search-text'] as string;

  if (window.innerWidth <= 480 && !query) {
    document.querySelector('.search-box')?.classList.add('active');
  }
  if ((window.innerWidth > 480 && query) || query) {
    const searchFetchFn = (page: number) => MovieAPI.getSearchMovies(query, page);
    assignMovieList(new MovieList(searchFetchFn, SEARCH_RESULT(query)));
  }
});

const searchBox = <HTMLFormElement>document.querySelector('.search-box');
searchBox.addEventListener('mouseleave', () => {
  if (!searchBox.classList.contains('active')) return;
  searchBox.classList.remove('active');
  searchBox.reset();
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelector('.scroll-to-top')?.addEventListener('click', scrollToTop);

window.onload = () => {
  setTimeout(() => {
    scrollToTop();
  }, 100);
};
