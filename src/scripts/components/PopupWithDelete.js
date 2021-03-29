import { Popup } from "./Popup.js"

class PopupWithDelete extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit();
    });
  }

  setDeleteHandle(card, evt) {
    this.evt = evt;
    this.card = card;
  }
  getDeleleInfo() {
    this.deleteInfo = {
      evt: this.evt,
      card: this.card
    }
    return this.deleteInfo
  }
}

export { PopupWithDelete }