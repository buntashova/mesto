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

  addNewCard(newInfo) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: newInfo.name,
        link: newInfo.link
      })
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

  getInfoUser() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-21/users/me", {
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

  editInfoUser(newName, newBio) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: newName,
        about: newBio
      })
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