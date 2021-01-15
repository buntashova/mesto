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

const editButton = document.querySelector(".profile__button-edt");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");

const nameInput = document.querySelector(".popup__input_type_name");
const bioInput = document.querySelector(".popup__input_type_bio");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const popupForm = document.querySelector(".popup__container");

const elementsTemplate = document.querySelector(".elements__template").content;
const elementsSection = document.querySelector(".elements");


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
closeButton.addEventListener("click", popupClose);
popupForm.addEventListener("submit", handleFormSubmit);
