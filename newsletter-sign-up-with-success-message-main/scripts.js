const containerz = document.getElementById("container");
const leftz = document.getElementById("left");
const rightz = document.getElementById("right");
const userEmailz = document.getElementById("user-email");
const invalidEmailz = document.getElementById("invalid-email");
const emailInputz = document.getElementById("email");
const submitBtnz = document.getElementById("submit-btn");
const confirmedMessagez = document.getElementById("confirmed-message");
const dismissMessagez = document.getElementById("dismiss-message");

function formSuccess() {
    confirmedMessagez.classList.add('active');
    containerz.classList.add('success');
    leftz.style.display = 'none';
    rightz.style.display = 'none';
    userEmailz.textContent = emailInputz.value; // Set the entered email in the confirmation message
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

submitBtnz.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if the email is valid
    if (validateEmail(emailInputz.value)) {
        invalidEmailz.classList.remove('active');
        formSuccess(); // Call the formSuccess function if the email is valid
    } else {
        invalidEmailz.classList.add('active');
    }
});

// Dismiss the confirmation message when the "Dismiss message" button is clicked
dismissMessagez.addEventListener('click', function() {
    confirmedMessagez.classList.remove('active');
    containerz.classList.remove('success');
    leftz.style.display = 'block';
    rightz.style.display = 'block';
});
