const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editPopup = document.querySelector(".popup_edt");
const editButton = document.querySelector(".profile__button-edt");
const closeEdit = editPopup.querySelector(".popup__close");

const addPopup = document.querySelector(".popup_add");
const addButton = document.querySelector(".profile__button-add");
const closeAdd = addPopup.querySelector(".popup__close");

const edtForm = editPopup.querySelector(".popup__container");
const addForm = addPopup.querySelector(".popup__container");


const nameInput = document.querySelector(".popup__input_type_name");
const bioInput = document.querySelector(".popup__input_type_bio");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const elementsTemplate = document.querySelector(".elements__template").content;
const elementsSection = document.querySelector(".elements");


function handleFormSubmit(evt) {
  evt.preventDefault();

  if (evt.target === edtForm) {
    profileName.textContent = nameInput.value;;
    profileDescription.textContent = bioInput.value;

    close(editPopup);
  }
  if (evt.target === addForm) {
    close(addPopup);
  }

}

function popupOpen(evt) {
  if (evt.target === editButton) {
    nameInput.value = profileName.textContent;
    bioInput.value = profileDescription.textContent;
    open(editPopup);
  }
  if (evt.target === addButton) {
    open(addPopup);
  }

}

function open(popup) {
  popup.classList.add("popup_opened");
}

function popupClose(evt) {
  if (evt.target === closeEdit) {
    close(editPopup);
  }
  if (evt.target === closeAdd) {
    close(addPopup);
  }
}

function close(popup) {
  popup.classList.remove("popup_opened");
}

function render() {
  cards.forEach(renderCards);
}

function renderCards(card) {
  const htmlElement = elementsTemplate.cloneNode(true);
  htmlElement.querySelector(".elements__description").innerText = card.name;
  htmlElement.querySelector(".elements__image").alt = card.name;
  htmlElement.querySelector(".elements__image").src = card.link;

  elementsSection.appendChild(htmlElement);
}

render();

editButton.addEventListener("click", popupOpen);
addButton.addEventListener("click", popupOpen);

closeEdit.addEventListener("click", popupClose);
closeAdd.addEventListener("click", popupClose);

edtForm.addEventListener("submit", handleFormSubmit);



