import { MovieDetailResponse } from '../types/response.type';
import Rate from './Rate';

/* eslint camelcase: ["error", {ignoreDestructuring: true}] */
class DetailModal {
  modal: HTMLDialogElement;

  constructor(private readonly movie: MovieDetailResponse, private readonly rate?: string) {
    this.modal = document.querySelector('.modal') as HTMLDialogElement;
    this.modal.replaceChildren();
    this.init();
  }

  private template = ({
    id,
    title,
    poster_path,
    overview,
    vote_average,
    genres,
  }: MovieDetailResponse) => `
          <div class="modal-container" id="${id}">
              <div class="title-wrapper">
                  <p class="modal-title">${title} 
                  </p>
                  <button class="close-button">
                      <img src="assets/close.png" />
                  </button>
              </div>
              <div class="modal-card">
                  <img
                    class="modal-thumbnail skeleton"
                    src="https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}"
                    loading="lazy"
                    alt="${title}"
                  />
                  <div class="modal-info">
                      <div class="modal-genre-score">
                          <p class="modal-genres">${genres
                            .map((genre) => genre.name)
                            .join(', ')}</p>
                          <p class="modal-score"><img src="assets/star_filled.png" alt="별점" /> ${vote_average}</p>
                          <p class="modal-overview">${overview}</p>
                      </div>
                      <div class="user-score"></div>
                  </div>
              </div>
          </div>
      `;

  init() {
    this.render();
    this.addEvent();
  }

  render() {
    (this.modal as HTMLDialogElement).insertAdjacentHTML('beforeend', this.template(this.movie));
    document.querySelector('.user-score')?.insertAdjacentHTML('beforeend', Rate.template());
    if (this.rate) Rate.renderStar(this.rate);
  }

  addEvent() {
    document.querySelector('.close-button')?.addEventListener('click', this.closeModal);
    Rate.listener((this.movie as MovieDetailResponse).id);
  }

  closeModal = () => {
    this.modal.replaceChildren();
    this.modal.close();
  };
}

export default DetailModal;
