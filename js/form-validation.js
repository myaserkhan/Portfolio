// Form validation
const form = document.querySelector('#signup');
const emailEl = document.querySelector('#email');

// Functions to show error / success
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('sucess');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};