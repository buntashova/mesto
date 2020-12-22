const editButton = document.querySelector(".profile__button-edt");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");
const saveButton = document.querySelector(".popup__button");

editButton.addEventListener("click", () => {
  popup.classList.add("popup_opened");
})

closeButton.addEventListener('click', () => {
  popup.classList.remove("popup_opened");
})

