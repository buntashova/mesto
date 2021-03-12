import "../src/index.css";

import { FormValidator } from "../scripts/components/validate.js";
import { Card } from "../scripts/components/card.js";
import { Section } from "../scripts/components/section.js"
import { cards, formData } from "../scripts/utils/constants.js";
import { Popup } from "../scripts/components/popup.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";

const editPopup = document.querySelector(".popup_type_edt");
const editButton = document.querySelector(".profile__button-edt");

const addPopup = document.querySelector(".popup_type_add");
const addButton = document.querySelector(".profile__button-add");


const imagePopup = document.querySelector(".popup_type_image");

const formEditProfile = editPopup.querySelector(".popup__form");
const formAddCard = addPopup.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input_type_name");
const bioInput = document.querySelector(".popup__input_type_bio");

const titleInput = document.querySelector(".popup__input_type_title");
const linkInput = document.querySelector(".popup__input_type_link");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const cardListSelector = ".elements";

const template = ".elements-template";

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

function addCard(item) {
  const card = new Card(item, template, handleCardClick => {
    const imageClick = new PopupWithImage(imagePopup);
    imageClick.open(item.link, item.name);
  });
  const cardElement = card.fillCard();
  cardList.setItem(cardElement);
}


const cardList = new Section({
  items: cards,
  renderer: (item) => {
    addCard(item);
  }
},
  cardListSelector
);

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

cardList.renderItems();

editButton.addEventListener("click", openEditProfilePopup);
addButton.addEventListener("click", openAddCardPopup);

formEditProfile.addEventListener("submit", handleFormSubmit);
formAddCard.addEventListener("submit", handleFormSubmit);

const validAddForm = new FormValidator(formData, formAddCard);
validAddForm.enableValidation();

const validEditForm = new FormValidator(formData, formEditProfile);
validEditForm.enableValidation();


