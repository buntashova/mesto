class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add("popup_opened");

    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }

  close() {
    this._popup.classList.remove("popup_opened");

    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("click", (event) => {
      if (event.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
  }
}

export { Popup }