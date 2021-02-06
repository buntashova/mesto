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

function openPopup(popup) {
  popup.classList.add("popup_opened");

  const form = popup.querySelector(".popup__form");
  const inputs = Array.from(form.querySelectorAll(formData.inputSelector));
  const button = form.querySelector(formData.submitButtonSelector);

  toggleButtonState(inputs, button, formData);

  checkFormValidity(form, inputs, formData);

  resetAllError(form, inputs, formData);

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
  openPopup(addPopup);
}

function openEditProfilePopup() {
  nameInput.value = profileName.textContent;
  bioInput.value = profileDescription.textContent;
  openPopup(editPopup);
}

function openImage(card) {
  openPopup(imagePopup);
  image.src = card.link;
  image.alt = card.name;
  caption.innerText = card.name;
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
  htmlElement.querySelector(".elements__image").addEventListener("click", () => { openImage(card) });

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




