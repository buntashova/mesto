import { FormValidator } from "./validate.js";
import { Card } from "./card.js";
import { cards, formData } from "./constants.js";
import { imagePopup, closePopup, openPopup } from "./utils.js"

const editPopup = document.querySelector(".popup_type_edt");
const editButton = document.querySelector(".profile__button-edt");
const closeEdit = editPopup.querySelector(".popup__close");

const addPopup = document.querySelector(".popup_type_add");
const addButton = document.querySelector(".profile__button-add");
const closeAdd = addPopup.querySelector(".popup__close");

const formEditProfile = editPopup.querySelector(".popup__form");
const formAddCard = addPopup.querySelector(".popup__form");

const closeImage = imagePopup.querySelector(".popup__close");

const nameInput = document.querySelector(".popup__input_type_name");
const bioInput = document.querySelector(".popup__input_type_bio");

const titleInput = document.querySelector(".popup__input_type_title");
const linkInput = document.querySelector(".popup__input_type_link");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const elementsSection = document.querySelector(".elements");

const template = ".elements-template";

function setCloseByOverlayClickListeners() {
  const popups = document.querySelectorAll(".popup");

  popups.forEach((popup) => {
    popup.addEventListener("click", (event) => {
      if (event.target.classList.contains("popup_opened")) {
        closePopup(popup)
      }
    });
  });
}

function openAddCardPopup() {
  formAddCard.reset();

  validAddForm.toggleButtonState();
  validAddForm.resetAllError();

  openPopup(addPopup);
}

function openEditProfilePopup() {
  formEditProfile.reset();

  validEditForm.toggleButtonState();
  validEditForm.resetAllError();

  nameInput.value = profileName.textContent;
  bioInput.value = profileDescription.textContent;
  openPopup(editPopup);
}

function addCard(card) {
  const item = new Card(card, template);
  const newCard = item.fillCard();
  elementsSection.prepend(newCard);
}

function renderInitialCards() {
  cards.forEach(card => {
    addCard(card);
  });
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  if (evt.target === formEditProfile) {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = bioInput.value;

    closePopup(editPopup);
  }
  if (evt.target === formAddCard) {
    const newCard =
    {
      name: titleInput.value,
      link: linkInput.value
    }
    addCard(newCard);
    closePopup(addPopup);
  }
}

renderInitialCards();

editButton.addEventListener("click", openEditProfilePopup);
addButton.addEventListener("click", openAddCardPopup);

closeEdit.addEventListener("click", () => { closePopup(editPopup) });
closeAdd.addEventListener("click", () => { closePopup(addPopup) });
closeImage.addEventListener("click", () => { closePopup(imagePopup) });

formEditProfile.addEventListener("submit", handleFormSubmit);
formAddCard.addEventListener("submit", handleFormSubmit);

setCloseByOverlayClickListeners();

const validAddForm = new FormValidator(formData, formAddCard);
validAddForm.enableValidation();

const validEditForm = new FormValidator(formData, formEditProfile);
validEditForm.enableValidation();


