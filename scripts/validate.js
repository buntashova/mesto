class FormValidator {
  constructor(formData, form) {
    this._formSelector = formData.formSelector;
    this._inputSelector = formData.inputSelector;
    this._submitButtonSelector = formData.submitButtonSelector;
    this._inactiveButtonClass = formData.inactiveButtonClass;
    this._inputErrorClass = formData.inputErrorClass;
    this._errorClass = formData.errorClass;

    this._form = form;
  }

  enableValidation() {
    this._form.addEventListener("sunmit", function (event) {
      event.preventDefault();
    });

    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);

    this._setEventListeners();
  }

  resetAllError() {
    this._inputs.forEach((input) => {
      this._resetErrorMessage(input);
    })
  }

  toggleButtonState() {
    if (this._isInvalidInput(this._inputs)) {
      this._button.classList.add(this._inactiveButtonClass);
    }
    else {
      this._button.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this.toggleButtonState();
      });
      input.addEventListener('keydown', (event) => {
        if (this._isInvalidInput(this._inputs)) {
          this._resetkeydownEnter(event)
        }
      });
    });
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._setErrorMessage(input, input.validationMessage);
    } else {
      this._resetErrorMessage(input);
    }
  }

  _setErrorMessage(input, errorMessage) {
    this._errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  _resetErrorMessage(input) {
    this._errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  };

  _isInvalidInput() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _resetkeydownEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

}

export { FormValidator };

