class Header {
  template = `
        <h1 class="logo"><img src="assets/logo.png" alt="MovieList 로고" /></h1>
        <form class="search-box">
          <input inputmode="numeric" type="text" name="search-text" placeholder="검색" />
          <button class="search-button">검색</button>
        </form>`;

  init() {
    this.render();
    this.addEvent();
  }

  render() {
    document.querySelector('header')?.insertAdjacentHTML('beforeend', this.template);
  }

  addEvent() {
    const searchBox = <HTMLFormElement>document.querySelector('.search-box');
    searchBox.addEventListener('mouseleave', () => {
      searchBox.reset();
    });
  }
}

export default Header;
