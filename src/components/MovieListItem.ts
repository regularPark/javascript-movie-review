import { Movie } from '../movies.type';

class MovieListItem {
  constructor(private readonly movie: Movie) {}

  private li = document.createElement('li');

  private template = (movie: Movie) => `
    <a>
      <div class="item-card" id="${movie.id}">
        <img
          class="item-thumbnail"
          src="https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}"
          loading="lazy"
          alt="${movie.title}"
        />
        <p class="item-title">${movie.title}</p>
        <p class="item-score"><img src="assets/star_filled.png" alt="별점" /> ${movie.vote_average}</p>
      </div>
    </a>
`;

  render() {
    this.li.innerHTML = this.template(this.movie);
    return this.li;
  }
}

export default MovieListItem;
