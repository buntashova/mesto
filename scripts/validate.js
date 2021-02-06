const formData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const setErrorMessage = (form, input, errorMessage, formData) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(formData.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formData.errorClass);
};

function resetkeydownEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

const resetErrorMessage = (form, input, formData) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(formData.inputErrorClass);
  errorElement.classList.remove(formData.errorClass);
  errorElement.textContent = '';
};

function resetAllError(form, inputs, formData) {
  inputs.forEach((input) => {
    resetErrorMessage(form, input, formData);
  })
}

const checkInputValidity = (form, input, formData) => {
  if (!input.validity.valid) {
    setErrorMessage(form, input, input.validationMessage, formData);
  } else {
    resetErrorMessage(form, input, formData);
  }
};

const checkFormValidity = (form, inputs, formData) => {
  inputs.forEach((input) => {
    checkInputValidity(form, input, formData);
  })
}

function isInvalidInput(inputs) {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButtonState(inputs, button, formData) {
  if (isInvalidInput(inputs)) {
    button.classList.add(formData.inactiveButtonClass);
  }
  else {
    button.classList.remove(formData.inactiveButtonClass);
  }
}

const setEventListeners = (form, inputs, button, formData) => {
  inputs.forEach((input) => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input, formData);
      toggleButtonState(inputs, button, formData);
    });
    input.addEventListener('keydown', function (event) {
      if (isInvalidInput(inputs)) {
        resetkeydownEnter(event)
      }
    });
  });
};

function enableValidation(formData) {
  const formList = Array.from(document.querySelectorAll(formData.formSelector));

  formList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const inputs = Array.from(form.querySelectorAll(formData.inputSelector));
    const button = form.querySelector(formData.submitButtonSelector);

    setEventListeners(form, inputs, button, formData);

  });
};

enableValidation(formData);
