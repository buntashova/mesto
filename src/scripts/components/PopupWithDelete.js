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

      this.deleteCard(this.card, this.evt, this.id);

      this._handleFormSubmit();
    });
  }

  setDeleteHandle(deleteCard, card, evt) {
    this.deleteCard = deleteCard;
    this.evt = evt;
    this.card = card
  }
}

export { PopupWithDelete }