const editButton = document.querySelector(".profile__button-edt");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");

const nameInput = document.querySelector(".popup__input_type_name");
const bioInput = document.querySelector(".popup__input_type_bio");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const popupForm = document.querySelector(".popup__container");

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;;
  profileDescription.textContent = bioInput.value;;

  popupClose();
}

function popupOpen() {
  nameInput.value = profileName.textContent;
  bioInput.value = profileDescription.textContent;
  popup.classList.add("popup_opened");
}

function popupClose() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupClose);
popupForm.addEventListener("submit", handleFormSubmit);
