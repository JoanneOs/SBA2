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