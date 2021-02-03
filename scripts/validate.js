// const inputs = Array.from(formEditProfile.elements).filter(input => (input.type !== "button") && (input.type !== "submit"));
// const buttonElement = formEditProfile.querySelector(".popup__button");

// inputs.forEach(input => {
//   input.addEventListener('input', handleFormInput);
// })

// function handleFormInput(event) {

//   const input = event.target;
//   const errorTextElement = document.querySelector(`#${input.id}-error`);
//   toggleButtonState(input);


//   resetErrorMessege(errorTextElement);

//   if (!isInputValid(input)) {
//     setErrorMessage(errorTextElement, input);
//   }
// }

// function setErrorMessage(errorElement, input) {
//   const errorTextElement = document.querySelector(`#${input.id}-error`);

//   if (input.id == "user-name") {
//     errorElement.textContent = input.validationMessage;
//   }
//   if (input.id == "user-bio") {
//     errorElement.textContent = input.validationMessage;
//   }
// }

// function resetErrorMessege(errorElement) {
//   errorElement.textContent = "";
// }

// function isInputValid(input) {
//   return input.validity.valid;
// }


// function hasInvalidInput() {
//   return inputs.some((input) => {
//     return !input.validity.valid;
//   });
// }

// function toggleButtonState(input) {
//   if (!isInputValid(input)) {
//     buttonElement.classList.add('popup__button_inactive');
//   }
//   else {
//     buttonElement.classList.remove('popup__button_inactive');
//   }
// }

const setEventListeners = (form, inputs, button) => {

  toggleButtonState(inputs, button);

  inputs.forEach((input) => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input);
      toggleButtonState(inputs, button);
    });
  });
};

const setErrorMessage = (form, input, errorMessage) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  // inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  // errorElement.classList.add('form__input-error_active');
};

const resetErrorMessage = (form, input) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  // inputElement.classList.remove('form__input_type_error');
  // errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    setErrorMessage(form, input, input.validationMessage);
  } else {
    resetErrorMessage(form, input);
  }
};

function isInvalidInput(inputs) {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButtonState(inputs, buttonElement) {
  if (isInvalidInput(inputs)) {
    buttonElement.classList.add('popup__button_inactive');
  }
  else {
    buttonElement.classList.remove('popup__button_inactive');
  }
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const inputs = Array.from(form.querySelectorAll('.popup__input'));
    const button = form.querySelector('.popup__button');

    setEventListeners(form, inputs, button);
  });
};

enableValidation();
