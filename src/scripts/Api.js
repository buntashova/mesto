export class Api {
  constructor(options) {
    this.url = options.url;
    this.headers = options.headers
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-21/cards", {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}