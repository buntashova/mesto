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
import { PopupWithDelete } from "../scripts/components/PopupWithDelete";

const deletePopup = document.querySelector(".popup_type_delete");

const avatarPopup = document.querySelector(".popup_type_avatar");

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

const buttonAvatar = ".profile__edt-avatar";

const profileName = ".profile__name";
const profileDescription = ".profile__description";

const cardListSelector = ".elements";

const template = ".elements-template";

const api = new Api(options);

const userInfo = new UserInfo(profileName, profileDescription, avatar, api);

Promise.all([
  api.getInfoUser(),
  api.getInitialCards(),
])
  .then(([UserData, CardData]) => {
    userInfo.fillUserInfo(UserData);

    cardList = new Section({
      items: CardData.reverse(),
      renderer: (item) => {
        const card = addCard(item);
        cardList.setItem(card);
      }
    },
      cardListSelector
    );
    cardList.renderItems();
  })
  .catch(err => {
    console.log("Невозможно получить информацию от сервера. Ошибка:" + err)
  })

function addCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick: () => {
        imageClick.open(item.link, item.name);
      },
      handleLikeClick: (evt) => {
        const like = card.isLike();

        if (like === true) {
          api.putLike(item._id)
            .then(res => {
              card.changeLike(evt)
              card.updateLengthLikes(res.likes.length)
            })

        }
        else {
          api.deleteLike(item._id)
            .then(res => {
              card.changeLike(evt)
              card.updateLengthLikes(res.likes.length)
            })
        }

      },
      handleDeleteIconClick: (evt) => {
        popupDel.setDeleteHandle(card, evt);

        popupDel.open();
      }
    },
    template
  )
  return card.fillCard(userInfo.getUserInfo());
}

let cardList;

const popupAdd = new PopupWithForm({
  popupSelector: addPopup,
  handleFormSubmit: (formData) => {
    let newCard =
    {
      name: formData.title,
      link: formData.link,
    }
    api.addNewCard(newCard)
      .then(data => {
        newCard._id = data._id;
        newCard.likes = data.likes;
        const card = addCard(newCard);
        cardList.setItem(card);
        popupAdd.close();
      })
      .catch(err => {
        console.log("Невозможно добавить карточку Ошибка:" + err)
      })

  }
})

const popupDel = new PopupWithDelete({
  popupSelector: deletePopup,
  handleFormSubmit: () => {
    const deleteInfo = popupDel.getDeleleInfo();
    api.deleteCard(deleteInfo.card._id)
      .then(res => {
        deleteInfo.card.handleDelete(deleteInfo.evt)
      }
      )
      .catch(err => {
        console.log("Невозможно удалить карточку.Ошибка:" + err)
      })
    popupDel.close();
  }
})

const popupEdt = new PopupWithForm({
  popupSelector: editPopup,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.user, formData.bio, popupEdt);
  }
})

const imageClick = new PopupWithImage(imagePopup);

function openAddCardPopup() {
  validAddForm.toggleButtonState();
  validAddForm.resetAllError();

  popupAdd.open();
}

const popupAvatar = new PopupWithForm({
  popupSelector: avatarPopup,
  handleFormSubmit: (formData) => {
    api.updateUserAvatar(formData.link)
      .then(res => {
        userInfo.setUserAvatar(formData.link);
        popupAvatar.close();
      }
      )
      .catch(err => {
        console.log("Невозможно обновить аватар Ошибка:" + err)
      })
  }
})

function openAvatarPopup() {
  popupAvatar.open();
}

function openEditProfilePopup() {
  validEditForm.toggleButtonState();
  validEditForm.resetAllError();

  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  bioInput.value = info.bio;

  popupEdt.open();
}

editButton.addEventListener("click", openEditProfilePopup);
addButton.addEventListener("click", openAddCardPopup);
document.querySelector(buttonAvatar).addEventListener("click", openAvatarPopup);

popupAdd.setEventListeners();
popupEdt.setEventListeners();
popupAvatar.setEventListeners();
popupDel.setEventListeners();

imageClick.setEventListeners();

const validAddForm = new FormValidator(formData, formAddCard);
validAddForm.enableValidation();

const validEditForm = new FormValidator(formData, formEditProfile);
validEditForm.enableValidation();


