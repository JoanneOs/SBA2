// first grab all the elements we need to work with
const form = document.getElementById('registrationForm');
const welcomeMessage = document.getElementById('welcomeMessage');
const welcomeUser = document.getElementById('welcomeUser');

// These are our input fields
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');


// We need these to show error messages if things go wrong
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Now we're adding an event listener for when the form is submitted
form.addEventListener('submit', function(event) {
    // Stop the form from being sent right away so we can check everything
    event.preventDefault();

    // Let's hide all the previous error messages in case the user tries again
    usernameError.classList.add('hidden');
    emailError.classList.add('hidden');
    passwordError.classList.add('hidden');


    // We'll use this variable to track if everything is valid
    let isValid = true;

    // If the username field is empty, show an error message
    if (!username.value) {
        usernameError.classList.remove('hidden');
        isValid = false;
    }