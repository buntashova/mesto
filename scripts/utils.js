const imagePopup = document.querySelector(".popup_type_image");

const image = document.querySelector(".popup__image");
const caption = document.querySelector(".popup__caption");

function closePopup(popup) {
  popup.classList.remove("popup_opened");

  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");

  document.addEventListener("keydown", closeByEscape);
}

function openImage(link, name) {
  openPopup(imagePopup);
  image.src = link;
  image.alt = name;
  caption.innerText = name;
}

export { openImage, imagePopup, closePopup, openPopup }