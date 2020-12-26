const editButton = document.querySelector(".profile__button-edt");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");

const nameInput = document.querySelector(".popup__input-name");
const bioInput = document.querySelector(".popup__input-bio");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const popupForm = document.querySelector(".popup__container");

editButton.addEventListener("click", () => {
  popup.classList.add("popup_opened");
})

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
})

nameInput.value = profileName.textContent;
bioInput.value = profileDescription.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const bioValue = bioInput.value;

  profileName.textContent = nameValue;
  profileDescription.textContent = bioValue;

  popup.classList.remove("popup_opened");
}

popupForm.addEventListener("submit", handleFormSubmit);
