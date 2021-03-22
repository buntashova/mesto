const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-21",
  headers: {
    'Content-Type': 'application/json',
    authorization: "035fd2fc-5c2b-4a58-b480-c0c8f099ca99"
  }
}

const formData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


export { options, formData };