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

const elementsTemplate = document.querySelector(".elements-template").content;
const elementsSection = document.querySelector(".elements");

const image = document.querySelector(".popup__image");
const caption = document.querySelector(".popup__caption");

const overlays = Array.from(document.querySelectorAll(".popup"));

function togglePopup(popup) {
  popup.classList.toggle("popup_opened");
  addEventListener("keydown", (event) => {
    if (event.key === 'Escape') {
      popup.classList.toggle("popup_opened");
    }
  });

}

function overlayListener() {
  overlays.forEach((overlay) => {
    overlay.addEventListener("click", (event) => {
      if (event.target === event.currentTarget)
        togglePopup(event.target);
    })
  })
}

function toggleAddCardPopup() {
  formAddCard.reset();
  togglePopup(addPopup);
}

function toggleEditProfilePopup() {
  nameInput.value = profileName.textContent;
  bioInput.value = profileDescription.textContent;
  togglePopup(editPopup);
}

function openImage(evt) {
  togglePopup(imagePopup);
  image.src = evt.target.src;
  image.alt = evt.target.alt;
  caption.innerText = evt.target.alt;
}

function createCard(card) {
  const htmlElement = elementsTemplate.cloneNode(true);
  const image = htmlElement.querySelector(".elements__image");
  htmlElement.querySelector(".elements__description").innerText = card.name;
  image.alt = card.name;
  image.src = card.link;

  htmlElement.querySelector(".elements__trash").addEventListener("click", handleDelete);
  htmlElement.querySelector(".elements__like").addEventListener("click", addLike);
  htmlElement.querySelector(".elements__image").addEventListener("click", openImage);

  return htmlElement;
}

function addCard(card) {
  const newCard = createCard(card);
  elementsSection.prepend(newCard);
}

function renderInitialCards() {
  cards.forEach(addCard);
}

function addLike(evt) {
  evt.target.classList.toggle("elements__like_active");
}

function handleDelete(evt) {
  evt.target.closest(".elements__element").remove();
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  if (evt.target === formEditProfile) {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = bioInput.value;


    togglePopup(editPopup);
  }
  if (evt.target === formAddCard) {
    const newCard =
    {
      name: titleInput.value,
      link: linkInput.value
    }
    addCard(newCard);
    togglePopup(addPopup);
  }
}

renderInitialCards();

editButton.addEventListener("click", toggleEditProfilePopup);
addButton.addEventListener("click", toggleAddCardPopup);

closeEdit.addEventListener("click", function () { togglePopup(editPopup) });
closeAdd.addEventListener("click", function () { togglePopup(addPopup) });
closeImage.addEventListener("click", function () { togglePopup(imagePopup) });

formEditProfile.addEventListener("submit", handleFormSubmit);
formAddCard.addEventListener("submit", handleFormSubmit);

overlayListener();




