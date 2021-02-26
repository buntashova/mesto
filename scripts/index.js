const editPopup = document.querySelector(".popup_type_edt");
const editButton = document.querySelector(".profile__button-edt");
const closeEdit = editPopup.querySelector(".popup__close");

const addPopup = document.querySelector(".popup_type_add");
const addButton = document.querySelector(".profile__button-add");
const closeAdd = addPopup.querySelector(".popup__close");

const formEditProfile = editPopup.querySelector(".popup__form");
const formAddCard = addPopup.querySelector(".popup__form");

const imagePopup = document.querySelector(".popup_type_image");
const closeImage = imagePopup.querySelector(".popup__close");

const nameInput = document.querySelector(".popup__input_type_name");
const bioInput = document.querySelector(".popup__input_type_bio");

const titleInput = document.querySelector(".popup__input_type_title");
const linkInput = document.querySelector(".popup__input_type_link");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const image = document.querySelector(".popup__image");
const caption = document.querySelector(".popup__caption");

const elementsSection = document.querySelector(".elements");

function openPopup(popup) {
  popup.classList.add("popup_opened");

  document.addEventListener("keydown", closeByEscape);
}

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

function overlayListener() {
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
  validEditForm.toggleButtonState();
  validEditForm.resetAllError();

  nameInput.value = profileName.textContent;
  bioInput.value = profileDescription.textContent;
  openPopup(editPopup);
}

function openImage(link, name) {
  openPopup(imagePopup);
  image.src = link;
  image.alt = name;
  caption.innerText = name;
}

// function createCard(card) {
//   const htmlElement = elementsTemplate.cloneNode(true);
//   const image = htmlElement.querySelector(".elements__image");
//   htmlElement.querySelector(".elements__description").innerText = card.name;
//   image.alt = card.name;
//   image.src = card.link;

//   htmlElement.querySelector(".elements__trash").addEventListener("click", handleDelete);
//   htmlElement.querySelector(".elements__like").addEventListener("click", addLike);
//   htmlElement.querySelector(".elements__image").addEventListener("click", openImage);
//   htmlElement.querySelector(".elements__image").addEventListener("click", () => { openImage(card) });

//   return htmlElement;
// }

class Card {
  constructor(card, cardTemplate) {
    this._name = card.name;
    this._link = card.link;
    this._template = cardTemplate;
  }

  _getTemplate() {
    const elementsTemplate = document
      .querySelector(this._template)
      .content
      .cloneNode(true);

    return elementsTemplate;
  }

  fillCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._image = this._element.querySelector(".elements__image");

    this._element.querySelector(".elements__description").innerText = this._name;
    this._image.alt = this._name;
    this._image.src = this._link;

    return this._element;
  }

  _handleDelete(evt) {
    evt.target.closest(".elements__element").remove();
  }

  _handleLike(evt) {
    evt.target.classList.toggle("elements__like_active");
  }

  _openImage() {
    openImage(this._link, this._name,);
  }

  _setEventListeners() {
    this._element.querySelector(".elements__trash").addEventListener("click", (evt) => {
      this._handleDelete(evt);
    });

    this._element.querySelector(".elements__like").addEventListener("click", (evt) => {
      this._handleLike(evt);
    });

    this._element.querySelector(".elements__image").addEventListener("click", () => {
      this._openImage();
    });
  }
}

function addCard(card) {
  const item = new Card(card, ".elements-template");
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

overlayListener();




