import { Popup } from "./Popup.js"

class PopupWithImage extends Popup {
  open(link, name) {
    super.open();

    document.querySelector(".popup__image").src = link;
    document.querySelector(".popup__image").alt = name;
    document.querySelector(".popup__caption").innerText = name

  }
}

export { PopupWithImage }