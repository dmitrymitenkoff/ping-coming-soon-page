const form = document.querySelector('form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('form small');

// Show error
function showError() {
  errorMessage.classList.remove('hidden');
  if (email.validity.valueMissing) {
    // If the field is empty, display:
    errorMessage.textContent = 'Please provide an email address';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain a valid email address, display:
    errorMessage.textContent = 'Please provide a valid email address';
  }

  // Set the styling:
  errorMessage.classList.remove('hidden');
}

// EVENT LISTENERS:
// Input field
email.addEventListener('input', event => {
  // Check if form field is valid
  if (email.validity.valid) {
    // If there's an error message visible and if the field is valid, remove the error message:
    errorMessage.textContent = ''; // resets the content of the message
    errorMessage.className = 'hidden'; //resets the visual state of the message
  } else {
    // If there's still an error, show the correct error
    showError();
  }
});

// Form
form.addEventListener('submit', event => {
  // If the email field is valid, let the form submi
  if (!email.validity.valid) {
    // If it isn't, display an appropriate error message
    showError();
    // Then prevent the form from being sent by cancelling the event
    event.preventDefault();
  }
});
