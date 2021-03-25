import "./index.css";

import { FormValidator } from "../scripts/validate.js";
import { Card } from "../scripts/components/Card.js";
import { Section } from "../scripts/components/Section.js"
import { options, formData } from "../scripts/utils/constants.js";
import { Popup } from "../scripts/components/Popup.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";

import { Api } from "../scripts/Api.js";


const editPopup = document.querySelector(".popup_type_edt");
const editButton = document.querySelector(".profile__button-edt");

const addPopup = document.querySelector(".popup_type_add");
const addButton = document.querySelector(".profile__button-add");

const imagePopup = document.querySelector(".popup_type_image");

const formEditProfile = editPopup.querySelector(".popup__form");
const formAddCard = addPopup.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input_type_name");
const bioInput = document.querySelector(".popup__input_type_bio");

const avatar = ".profile__avatar";

const profileName = ".profile__name";
const profileDescription = ".profile__description";

const cardListSelector = ".elements";

const template = ".elements-template";


const api = new Api(options);

api.getInitialCards()
  .then(data => {
    const cardList = new Section({
      items: data,
      renderer: (item) => {
        addCard(cardList, item);
      }
    },
      cardListSelector
    );
    cardList.renderItems();
  })


const userInfo = new UserInfo(profileName, profileDescription, avatar, api);
userInfo.getUserInfo();

const popupAdd = new PopupWithForm({
  popupSelector: addPopup,
  handleFormSubmit: (formData) => {
    const newCard =
    {
      name: formData.title,
      link: formData.link
    }
    api.addNewCard(newCard)

    addCard(cardList, newCard)

    //addCard(newCard);
    popupAdd.close();
  }
})

const popupEdt = new PopupWithForm({
  popupSelector: editPopup,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.user, formData.bio);
    popupEdt.close();
  }
})

const imageClick = new PopupWithImage(imagePopup);

function openAddCardPopup() {
  validAddForm.toggleButtonState();
  validAddForm.resetAllError();

  popupAdd.open();
}

function openEditProfilePopup() {
  validEditForm.toggleButtonState();
  validEditForm.resetAllError();

  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  bioInput.value = info.bio;

  popupEdt.open();
}



// const cardList = new Section({
//   items: cards,
//   renderer: (item) => {
//     addCard(item);
//   }
// },
//   cardListSelector
// );

function addCard(cardList, item) {
  const card = new Card(item, template, handleCardClick => {
    imageClick.open(item.link, item.name);
  });
  const cardElement = card.fillCard();
  cardList.setItem(cardElement);
}

editButton.addEventListener("click", openEditProfilePopup);
addButton.addEventListener("click", openAddCardPopup);

popupAdd.setEventListeners();
popupEdt.setEventListeners();

imageClick.setEventListeners();

const validAddForm = new FormValidator(formData, formAddCard);
validAddForm.enableValidation();

const validEditForm = new FormValidator(formData, formEditProfile);
validEditForm.enableValidation();


