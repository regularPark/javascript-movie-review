import { ratingComment } from '../constants';
import { setLocalStorage } from '../util/LocalStorage';

const Rate = {
  template() {
    return `
    <div class="star-wrapper">
      <p>내 별점</p> 
        <div class="star">
          <input type="radio" name="rating" value="10" id="rate10"><label for="rate10"><img src="assets/star_filled.png"></label>
          <input type="radio" name="rating" value="8" id="rate8"><label for="rate8"><img src="assets/star_filled.png"></label>
          <input type="radio" name="rating" value="6" id="rate6"><label for="rate6"><img src="assets/star_filled.png"></label>
          <input type="radio" name="rating" value="4" id="rate4"><label for="rate4"><img src="assets/star_filled.png"></label>
          <input type="radio" name="rating" value="2" id="rate2"><label for="rate2"><img src="assets/star_filled.png"></label>
        </div>
    </div>
    <p class="rating-text"></p>`;
  },
  saveRate(id: number, rate: string) {
    setLocalStorage(String(id), JSON.stringify(rate));
  },

  listener(id: number) {
    const ratingText = <HTMLParagraphElement>document.querySelector('.rating-text');
    const stars = document.querySelector('.star');
    stars?.addEventListener('click', (e) => {
      if (!(e.target instanceof HTMLInputElement)) return;
      const rate = (<HTMLInputElement>e.target).value;
      ratingText.textContent = this.ratingText(rate);
      this.saveRate(id, rate);
    });
  },

  renderStar(rate: string) {
    const stars = <HTMLInputElement>document.querySelector(`#rate${rate}`);
    stars.checked = true;
    (<HTMLParagraphElement>document.querySelector('.rating-text')).textContent =
      this.ratingText(rate);
  },

  ratingText(rate: string) {
    return window.innerWidth > 480 ? rate + ' ' + ratingComment[Number(rate)] : rate;
  },
};

export default Rate;
