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

// Additional requirement: Cache at least one element using querySelector
const submitButton = document.querySelector('button[type="submit"]');

// Additional requirement: Create a new element and append it
const thankYouMessage = document.createElement('p');
thankYouMessage.textContent = 'Thank you for registering!'; // Set content for the new element
thankYouMessage.classList.add('hidden'); // Hide it for now
form.parentNode.appendChild(thankYouMessage); // Append to form's parent (main container)


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

      // If the email is not valid (thanks to built-in HTML validation), show an error
      if (!email.validity.valid) {
        emailError.classList.remove('hidden');
        isValid = false;
    }

       // If the password is less than 6 characters, show an error
       if (password.value.length < 6) {
        passwordError.classList.remove('hidden');
        isValid = false;
    }

    // If everything is filled out correctly, let's welcome the user
    if (isValid) {
        // Hide the form once it's successfully submitted
        form.classList.add('hidden');

        // Show the welcome message
        welcomeMessage.classList.remove('hidden');

        // Insert the username into the welcome message
        welcomeUser.textContent = username.value;

        // Show the thank you message
        thankYouMessage.classList.remove('hidden');

          // change an attribute of the submit button (disable it after submission)
          submitButton.setAttribute('disabled', 'true');

    }
});

// Additional requirement: Add another event listenvaer to the input fields (e.g., real-time validation)
username.addEventListener('input', function() {
    if (username.value) {
        usernameError.classList.add('hidden');
    }
});

// iterate over elements
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        input.classList.add('focused');
    });
});

//  using Browser Object Model (BOM)
window.addEventListener('resize', function() {
    console.log('Window resized to: ' + window.innerWidth + 'px wide and ' + window.innerHeight + 'px tall');
});