const form = document.querySelector('form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-msg');

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty, display the following error message.
    errorMessage.textContent =
      'Whoops! It looks like you forgot to add your email';
    email.classList.add('error');
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address, display the following error message.
    errorMessage.textContent = 'Please provide a valid email address';
    email.classList.add('error');
  }
  // Set the styling appropriately
  errorMessage.classList.remove = 'hidden';
}

email.addEventListener('input', event => {
  // Check if the form fields are valid
  if (email.validity.valid) {
    // In case there is an error message visible, if the field is valid, we remove the error message.
    errorMessage.textContent = ''; // Reset the content of the message
    errorMessage.classList.add = 'hidden'; // Hide the error message
    email.classList.remove('error');
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});
