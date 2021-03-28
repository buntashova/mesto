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
        return this._handleResponse(res);
      })
      .catch(err => Promise.reject(err));
  }

  addNewCard(newInfo) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: newInfo.name,
        link: newInfo.link
      })
    })
      .then(res => {
        return this._handleResponse(res);
      })
      .catch(err => Promise.reject(err));
  }

  deleteCard(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(res => {
        return this._handleResponse(res);
      })
      .catch(err => Promise.reject(err));

  }

  getInfoUser() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-21/users/me", {
      headers: this.headers
    })
      .then(res => {
        return this._handleResponse(res);
      })
      .catch(err => Promise.reject(err));

  }

  editInfoUser(newName, newBio) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: newName,
        about: newBio
      })
    })
      .then(res => {
        return this._handleResponse(res);
      })
      .catch(err => Promise.reject(err));


  }

  updateUserAvatar(newAvatar) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-21/users/me/avatar", {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: newAvatar
      })
    })
      .then(res => {
        return this._handleResponse(res);
      })
      .catch(err => Promise.reject(err));

  }

  putLike(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.headers,
    })
      .then(res => {
        return this._handleResponse(res);
      })
      .catch(err => Promise.reject(err));

  }

  deleteLike(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(res => {
        return this._handleResponse(res);
      })
      .catch(err => Promise.reject(err));
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

