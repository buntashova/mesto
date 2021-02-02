const inputs = Array.from(formEditProfile.elements).filter(input => (input.type !== "button") && (input.type !== "submit"));

inputs.forEach(input => {
  input.addEventListener('input', handleFormInput);
})

function handleFormInput(event) {
  const input = event.target;
  const errorTextElement = document.querySelector(`#${input.id}-error`);

  resetErrorMessege(errorTextElement);

  if (!isInputValid(input)) {
    setErrorMessage(errorTextElement, input);
  }
}

function setErrorMessage(errorElement, input) {
  const errorTextElement = document.querySelector(`#${input.id}-error`);

  if (input.id == "user-name") {
    errorElement.textContent = input.validationMessage;
  }
  if (input.id == "user-bio") {
    errorElement.textContent = input.validationMessage;
  }
}

function resetErrorMessege(errorElement) {
  errorElement.textContent = "";
}

function isInputValid(input) {
  return input.checkValidity();
}