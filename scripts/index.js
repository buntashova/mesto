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

const imagePopup = document.querySelector(".popup_image");
const closeImage = imagePopup.querySelector(".popup__close");

const nameInput = document.querySelector(".popup__input_type_name");
const bioInput = document.querySelector(".popup__input_type_bio");

const titleInput = document.querySelector(".popup__input_type_title");
const linkInput = document.querySelector(".popup__input_type_link");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const elementsTemplate = document.querySelector(".elements__template").content;
const elementsSection = document.querySelector(".elements");


function handleFormSubmit(evt) {
  evt.preventDefault();

  if (evt.target === edtForm) {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = bioInput.value;

    close(editPopup);
  }
  if (evt.target === addForm) {
    const newCard =
    {
      name: titleInput.value,
      link: linkInput.value
    }
    renderCards(newCard);
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
  if (evt.target === closeImage) {
    close(imagePopup);
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

  htmlElement.querySelector(".elements__trash").addEventListener("click", handleDelete);

  htmlElement.querySelector(".elements__like").addEventListener("click", addLike);

  htmlElement.querySelector(".elements__image").addEventListener("click", openImage);

  elementsSection.prepend(htmlElement);
}

function openImage(evt) {
  open(imagePopup);
  document.querySelector(".popup__image").src = evt.target.src;
  document.querySelector(".popup__image").alt = evt.target.alt;
  document.querySelector(".popup__caption").innerText = evt.target.alt;
}

function addLike(evt) {
  evt.target.classList.toggle("elements__like_active");
}

function handleDelete(evt) {
  evt.target.closest(".elements__element").remove();
}

render();

editButton.addEventListener("click", popupOpen);
addButton.addEventListener("click", popupOpen);

closeEdit.addEventListener("click", popupClose);
closeAdd.addEventListener("click", popupClose);
closeImage.addEventListener("click", popupClose);

edtForm.addEventListener("submit", handleFormSubmit);
addForm.addEventListener("submit", handleFormSubmit);




